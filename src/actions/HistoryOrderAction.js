import * as HistoryOrderAPI from "../api/HistoryOrderRequest";

export const getAllHistoryOrder = async () => {
  try {
    const { data } = await HistoryOrderAPI.getAllHistoryOrder();
    return data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    throw error; // Nếu bạn muốn ném lại lỗi cho phần gọi hàm xử lý
  }
};
