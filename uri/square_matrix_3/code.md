# (URI-1557) Square Matrix III

Solution 1:

	* int to string
	* string as argument

``` c++
#include <stdio.h>
#include <stdlib.h>

int pow(int x, int y){
    if(y==0) return 1;
    else return x * pow(x, --y);
}

int strlen(const char* wrd){
    int i=0;
    while(wrd[i])i++;
    return i;
}

int main(){

    int tamanho;
    char buff[50] = "\0";
    char argc[50] = "\0";

    while(1){

        scanf("%d", &tamanho);
        if(tamanho <= 0 || tamanho > 15)
            return 0;

        int n = pow(4, tamanho-1);

        sprintf(buff, "%d", n);

        sprintf(argc, "%%%dd", strlen(buff));

        int k=1, dobra=2;
        int i, j;

        for(i=0; i<tamanho; i++){
            for(j=0; j<tamanho; j++){

                printf(argc, k);
                if(j<tamanho-1)
                    printf(" ");
                k*=2;

            }
            k=dobra;
            dobra*=2;
            printf("\n");
        }

        printf("\n");
        //Fim do while
    }

    return 0;
}
```