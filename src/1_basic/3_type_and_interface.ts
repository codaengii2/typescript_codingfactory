/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
  name: string;
  year: number;
}

/* const yuJin: {
  name: string;
  year: number;
} = {
  name: '안유진',
  year: 2002,
} */
//매번 타입을 입력해줘야 하는데 타입을 미리 
//선언해놓으면 간편

const yuJin: IdolType = {
  name: '안유진',
  year: 2002,
}

/**
 * Interface   
 */ 

interface IdolInterface{
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2002,
}

interface IdlIT{
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdlIT = {
  name: '안유진',
  year: 2002,
}

interface IdolOptional{
  name: string;
  year?: number;
  //year이 들어가도 되고 안들어가도 되고
}

const yuJin4: IdolOptional = {
  name: '안유진',
  year: 2002,
}

// Type과 Interface의 차이점
// 기본적으로 Interface는 객체 형태로 들어감
