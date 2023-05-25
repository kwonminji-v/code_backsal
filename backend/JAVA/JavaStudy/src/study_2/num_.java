package study_2;

public class num_ { //클래스의 시작
public static void main(String[] args) { //메인메소드의 시작
double num = 0; //실수형 변수 num 선언, 0대입.
int totalCount = 5; //정수형 변수 totalCount, 5대입.

System.out.println("num의 값은 = " + num);
//num의 값은 = 와 num의 변수값을 화면에 출력
System.out.println("totalCount의 값은 = " + totalCount);
//tototalCount의 값은 = 와 totalCount의 변수값을 화면에 출력
num = 54; //num에 54 대입, num의 변수값은 54로 변함.
System.out.println("num의 값은 " + num);
// num의 값은 과 num의 변수값 화면에 출력
num=3.14;   //num에 3.14대입, num의 변수값은 3.14로 변함.

//최종 결과값은 ? Hello 30 이지만,
//끝나기 직전 각 변수의 변수값은 num = 3.14, totalCount = 5
}//메인 메소드의 끝
}//클래스의 끝
