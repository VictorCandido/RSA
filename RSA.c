#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main ()
{
  int iSecret, iGuess;
  srand (time(NULL));
  iSecret = rand() % 10 + 1;

  if (primo(2)) {
      printf("sim");
  } else {
      printf("nao");
  }
  return 0;
}

int primo (int n) {
    if (n == 1) return 0;{}
    for (int i = 2; i < n; i++) 
        if (n % i == 0) return 0;
    return 1;
}