import InsufficientBalanceForSocketCheck from "./InsufficientBalanceForSocketCheck.vue";
import CopyTradeStart from "./CopyTradeStart.vue";
import CopyTradeFailedDueToInsufficientBalance from "./CopyTradeFailedDueToInsufficientBalance.vue";
import CopyTradeActivityBuyOrderPlaced from "./CopyTradeActivityBuyOrderPlaced.vue";
import CopyTradeActivityBuyOrderFilledPartially from "./CopyTradeActivityBuyOrderFilledPartially.vue";
import CopyTradeActivityBuyOrderFilled from "./CopyTradeActivityBuyOrderFilled.vue";
import CopyTradeActivityProfitSellOrderFilledPartially from "./CopyTradeActivityProfitSellOrderFilledPartially.vue";
import CopyTradeActivityProfitSellOrderFilled from "./CopyTradeActivityProfitSellOrderFilled.vue";
import CopyTradeActivityStopSellOrderFilledPartially from "./CopyTradeActivityStopSellOrderFilledPartially.vue";
import CopyTradeActivityStopSellOrderFilled from "./CopyTradeActivityStopSellOrderFilled.vue";
import CopyTradeCompleted from "./CopyTradeCompleted.vue";
import CopyTradeFailedDueToInvalidBuyOrder from "./CopyTradeFailedDueToInvalidBuyOrder.vue";
import CopyTradeActivityProfitSellOrderPlaced from "./CopyTradeActivityProfitSellOrderPlaced.vue";
import CopyTradeErrored from "./CopyTradeErrored.vue";
import CopyTradeTicketCommented from "./CopyTradeTicketCommented.vue";
import CopyTradeTicketArchived from "./CopyTradeTicketArchived.vue";

export default {
  INSUFFICIENT_BALANCE_FOR_SOCKET_CHECK: InsufficientBalanceForSocketCheck,
  COPY_TRADE_START: CopyTradeStart,
  COPY_TRADE_FAILED_DUE_TO_INSUFFICIENT_BALANCE:
    CopyTradeFailedDueToInsufficientBalance,
  COPY_TRADE_ACTIVITY_BUY_ORDER_PLACED: CopyTradeActivityBuyOrderPlaced,
  COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED_PARTIALLY:
    CopyTradeActivityBuyOrderFilledPartially,
  COPY_TRADE_ACTIVITY_BUY_ORDER_FILLED: CopyTradeActivityBuyOrderFilled,
  COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED_PARTIALLY:
    CopyTradeActivityProfitSellOrderFilledPartially,
  COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_FILLED:
    CopyTradeActivityProfitSellOrderFilled,
  COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED_PARTIALLY:
    CopyTradeActivityStopSellOrderFilledPartially,
  COPY_TRADE_ACTIVITY_STOP_SELL_ORDER_FILLED:
    CopyTradeActivityStopSellOrderFilled,
  COPY_TRADE_COMPLETED: CopyTradeCompleted,
  COPY_TRADE_FAILED_DUE_TO_INVALID_BUY_ORDER:
    CopyTradeFailedDueToInvalidBuyOrder,
  COPY_TRADE_ACTIVITY_PROFIT_SELL_ORDER_PLACED:
    CopyTradeActivityProfitSellOrderPlaced,
  COPY_TRADE_ERRORED: CopyTradeErrored,
  COPY_TRADE_TICKET_COMMENTED: CopyTradeTicketCommented,
  COPY_TRADE_TICKET_ARCHIVED: CopyTradeTicketArchived,
};
