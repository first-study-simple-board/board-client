/**
 * 리스트 내 아이템 번호 계산 함수
 * @index 해당 페이지 내 index
 * @currentPage 현재 페이지 번호
 * @totalCount 총 아이템 갯수
 * @limit 한 페이지에서 보여줄 갯수
 */
export function calculateOrderNumber(
  index: number,
  currentPage: number,
  totalCount: number,
  limit: number
) {
  return totalCount - limit * (currentPage - 1) - index;
}
