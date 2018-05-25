

import random
import numpy as np
sup = 100.0
inf = -100.0

def combinationMean(idea1,idea2):
    return Idea(np.array([ (idea1.array[i]+idea2.array[i])/2 for i in range(len(idea1.array))]),idea1.costFunc,idea1.id)
def combinationDiffEvo(idea1,idea2,idea3):
    array = np.array(idea1.array[:])
    for i in range(len(array)):
        array[i]+= (idea3.array[i]-idea2.array[i])
        if array[i] > sup or array[i] < inf:
            array[i] = random.random()*(sup-inf)+inf
    return Idea(array,idea1.costFunc,idea1.id)
def eucDist(idea1,idea2):
    d = 0
    p1 = idea1.array
    p2 = idea2.array
    for i in range(len(p1)):
        d+= (p1[i]-p2[i])**2
    return d

def clusDist(c1,c2):
    dist = eucDist(c1.ideas[0],c2.ideas[0])
    for i in c1.ideas:
        for j in c2.ideas:
            newDist = eucDist(i,j)
            if newDist < dist:
                dist = newDist

    return dist

def sigmoid(x):
    return 1/(1+np.exp(-x))


def clustering(ideas,clust = 5):
    nClusters = len(ideas)
    clusters = [Cluster([idea]) for idea in ideas]

    while len(clusters) > clust:
        X,Y = 0, 1
        minDist = clusDist(clusters[0],clusters[1])
        for i in range(len(clusters)):
            for j in range(i+1,len(clusters)):
                otherDist = clusDist(clusters[i],clusters[j])
                if otherDist < minDist:
                    minDist = otherDist
                    X = i
                    Y = j
        clusters[X]= clusters[X].join(clusters.pop(Y))
    return clusters

class Idea:
    """docstring for Idea."""
    def __init__(self, array,costFunc,iden):
        self.array = array
        self.costFunc = costFunc
        self.cost = costFunc(array)
        self.id = iden


    def copia(self):
        return Idea(self.array[:],self.costFunc,self.id)
    def coste(self):
        return self.cost

    def getId(self):
        return self.id

    def randIdea(costFunc,iden,dim,inf,sup):
        array = np.array([random.random()*(sup-inf)-sup for i in range(dim)])
        return Idea(array,costFunc,iden)


    def muta(self,currentiter,maxiter):
        newIdea = self.copia()
        for i in range(len(newIdea.array)):
            newIdea.array[i] += random.random()*sigmoid((maxiter/2.0-currentiter)/20)*np.random.normal(0,1)
            if newIdea.array[i] > sup:
                newIdea.array[i] = sup
            if newIdea.array[i] < inf:
                newIdea.array[i] = inf
        return newIdea

    def cambia(self,idea):
        self.array = idea.array
        self.costFunc = idea.costFunc
        self.cost = idea.coste()
        self.id = idea.getId()

    def realCost(self):
        return self.costFunc(self.array)


class Cluster(object):
    """docstring for Cluster."""
    def __init__(self,ideas=None):
        self.ideas = ideas
        self.representor = None

    def append(self,idea):
        if self.ideas == None:
            self.ideas = []
        self.ideas.append(idea)

    def clusterRepresent(self):
        if self.representor == None:
            mejor = 0
            mejorCoste = self.ideas[0].realCost()

            for i in range(len(self.ideas)):
                newCost = self.ideas[i].realCost()
                if newCost < mejorCoste:
                    newCost = mejorCoste
                    mejor = i
            self.representor = self.ideas[mejor]
        return self.representor

    def join(self,otherCluster):
        return Cluster(self.ideas + otherCluster.ideas)
    def len(self):
        return len(self.ideas)

    def randIdea(self):
        return random.choice(self.ideas)
