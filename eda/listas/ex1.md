# Concatenar Listas

``` c
#include <stdio.h>
#include <stdlib.h>

typedef struct lista {
    int value;
    struct lista *next;
} Lista;

Lista * createNode(int value){
    Lista * L = (Lista*)malloc(sizeof(Lista));
    L->value = value;
    L->next = NULL;
    return L;
}

void push(int value, Lista * head){
    Lista * current = head;
   // printf("current value = %d\npoints to %d", current->value, current->next);
    while(current->next != NULL){
        current = current->next;
    }
    current->next = createNode(value);
}

void concatenate(Lista * L1, Lista * L2){
    Lista * EOL1 = L1;
    while(EOL1->next != NULL){
        EOL1 = EOL1->next;
    }
    // printf("Concatenou?\n");
    EOL1->next = L2;
    // printf("Sepa q sim\n");
}

void print(Lista * L){
    while(L != NULL){
        printf("%d ", L->value);
        L = L->next;
    }
}

int main()
{
    Lista * headL1 = createNode(0);
    Lista * headL2 = createNode(0);
    Lista * head1 = NULL;
    Lista * head2 = NULL;

   // printf("current value = %d\npoints to %d", headL1->value, headL1->next);

    int aux;

    while(1){
        scanf("%d", &aux);
        if(aux < 0)
            break;
        push(aux, headL1);
    }
    head1 = headL1->next;
    free(headL1);

    while(1){
        scanf("%d", &aux);
        if(aux < 0)
            break;
        push(aux, headL2);
    }
    head2 = headL2->next;
    free(headL2);

    concatenate(head1, head2);
    print(head1);

    return 0;
}
```
