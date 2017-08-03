export default function(targetNode) {
    while(targetNode.children().length > 0) {
            targetNode.empty();
    }
}