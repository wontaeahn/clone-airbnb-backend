/**
 * ^ - 문자열의 시작
 * (?=.*[a-zA-Z]) - 영어 대/소문자 중 1개 이상 포함 확인
 *
 * (?=.*[0-9]) - 숫자 0~9 중 1개 이상 포함 확인
 *
 * (?=.*[!@#$%^&*?+=-]) - 특수문자 !@#$%^&*?+=- 중 1개 이상 포함
 *
 * [a-zA-Z0-9!@#$%^&*?+=-] 영어 대/소문자, 숫자, 특수문자만 가능
 *
 * {8,} 최소 8자리 이상 최대 제한 없음
 */
export const passwordRegExp =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?+=-]).[a-zA-Z0-9!@#$%^&*?+=-]{8,}$/;
