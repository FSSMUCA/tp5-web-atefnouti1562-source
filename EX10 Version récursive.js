function sommeRecursive(n) {
    if (n === 1) return 1;
    return n + sommeRecursive(n - 1);
}