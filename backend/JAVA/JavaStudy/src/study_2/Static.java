package study_2;

//자동 정렬 ctrl + shift + f
//라인 삭제 ctrl + d 

class KHE {
	public static int exStatic = 88;
	public int exInstance = 99;
}

public class Static {
	public static void main (String[] args) {
		System.out.println(KHE.exStatic);
		
		KHE E1 = new KHE();
		System.out.println(E1.exInstance);
		
		KHE.exStatic = 77;
		E1.exInstance = 11;
		
		System.out.println(KHE.exStatic);
		System.out.println(E1.exInstance);
		
	}
}

// Instance 되면 Class의  static과는 관계없이 완전히 새롭게 복제되어 메모리에 할당되는 것 같지만 아니다
//최초 할당된 메모리에서 변함없이 프로그램이 종료될 때까지 고정이다
//즉, 변수나 메소드가 instance되었다 하더라도 static으로 선언된 것은 기존 class 함수와 메모리 할당을 공유한다.