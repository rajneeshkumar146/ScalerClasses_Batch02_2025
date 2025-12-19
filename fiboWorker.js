function calculateFibo(number) {
    if (number <= 1) {
        return number;
    }

    return calculateFibo(number - 1) + calculateFibo(number - 2);
}