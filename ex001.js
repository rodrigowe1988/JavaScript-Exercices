for (i = 0; i < 5; i++) {
    if (i == 2) {
        break;
    }
    console.log(i);
}

for (i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    console.log(i);
}

console.log("Os números ímpares");
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

console.log("Os números pares");
for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}