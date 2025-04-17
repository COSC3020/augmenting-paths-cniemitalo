function augmentingPath(graph, start, end) {
    let path = []; 
    let visited = []; 

    if (augmenting(graph, start, end, path, visited)) {
        return path; 
    } else {
        return []; 
    }
}

function augmenting(graph, current, end, path, visited) {
    path.push(current); 
    visited.push(current); 

    if (current === end) {
        return true; 
    }

    for (let neighbor in graph[current]) {
        if (!visited.includes(neighbor) && augmenting(graph, neighbor, end, path, visited)) {
            return true; 
        }
    }

    path.pop(); 
    return false; 
}