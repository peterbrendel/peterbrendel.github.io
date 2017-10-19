# Concatenar Listas

``` c
#include <stdio.h>
#include <stdlib.h>

typedef struct lista {
    int value;
    struct lista *next;
} Lista;

void init(Lista * L, int value){
    L = (Lista*)malloc(sizeof(Lista));
    L->value = value;
    L->next = NULL;
}

void push(int value, Lista * head){
    Lista * current = NULL;
   // printf("current value = %d\npoints to %d", current->value, current->next);
    while(current->next != NULL){
        current = current->next;
    }
    init(current->next, value);
}

void concatenate(Lista * L1, Lista * L2){
    Lista * EOL1 = L1;
    while(EOL1 != NULL){
        EOL1 = EOL1->next;
    }
    EOL1->next = L2;
}

void print(Lista * L){

    while(L != NULL){
        printf("%d ", L->value);
        L = L->next;
    }

}

int main()
{
    Lista * headL1;
    init(headL1, 0);
    Lista * headL2;
    init(headL2, 0);

   // printf("current value = %d\npoints to %d", headL1->value, headL1->next);

    int aux;

    while(1){
        scanf("%d", &aux);
        if(aux < 0)
            break;
        push(aux, headL1);
    }
    while(scanf("%d", &aux)){
        if(aux < 0)
            break;
        push(aux, headL2);
    }

    concatenate(headL1, headL2);
    print(headL1);

    return 0;
}
```