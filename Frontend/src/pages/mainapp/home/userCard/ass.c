#include <stdio.h>
int main()
{
    printf ("Enter two numbers for start and end index : 1 500 \n");
    // C program to demonstrate an armstrong number
// between the given intervals


	int s = 1, e = 500, num, n, arm = 0, i, sum;
	
	// iterating the for loop
	// using the given intervals
	for (i = s; i <= e; i++) {
		num = i;
		sum = i;
		
		// finding the armstrong number
		while (num != 0) {
			n = num % 10;
			arm = arm + (n * n * n);
			num = num / 10;
		}
		
		// if number is equal to
		// the arm then it is a
		// armstrong number
		if (sum == arm) {
			printf("%d\n", i);
		}
		arm = 0;
    }


    
    // int sum = 0;
    // int n;
    // printf("enter a positive number");
    // scanf("%d" ,&n);
    // for(int i =1;i<=n;i++){
        
    //         printf("%d  ",i*i);
    //         sum+=i*i;
        
    // }
    // printf("\n%d is the sum" , sum);
    // for ( int i=1;i<=10;i++)
    // {
    //     int n;
    //     printf("Number-%d :",i);
    // 	scanf("%d" ,&n);
    // 	sum +=n;
    // }
    // for(int i=1;i<=10;i++){
    //     int inputnum ;
    //     // printf("%d --> ",i);
    //     scanf("%d" ,&inputnum);
    //     sum+=inputnum;
    // }

    // printf("Sum and average are %d and %d" , sum , sum/10);
//     int n;

// printf(“Enter the value for n:\n”);

// scanf(“% d”, &n);

// for (int i = 0; i <= n; i++)

// {

//     if (i % 2 == 1)

//         printf(“% d\n”, i);
// }
}
// int i,sum=0;
// 	float avg;
// 	printf("Input the 10 numbers : \n");1

// 	for (i=1;i<=10;i++)
// 	{
//         int n;
//         printf("Number-%d :",i);
// 		scanf("%d",&n);
// 		sum +=n;
// 	}
// 	avg=sum/10.0;
// 	printf("The sum of 10 no is : %d\nThe Average is : %f\n",sum,avg);