package study_2;

//자동 정렬 ctrl + shift + f
//라인 삭제 ctrl + d 

//class KHE {
//	public static int exStatic = 88;
//	public int exInstance = 99;
//}

public class Auto_set {
	public static void main (String[] args) {
		System.out.println(KHE.exStatic);
		
		KHE E1 = new KHE();
		System.out.println(E1.exInstance);
	}
}
