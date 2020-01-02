package io.stacs.nav.drs.api.model.callback;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

/**
 * @author liuyu
 * @description
 * @date 2019-09-04
 */
@Getter
@Setter
@ToString(callSuper = true)
public class TxReceiptData{
    /**
     * fee info
     */
    private FeeInfo feeInfo;

    /**
     * the result data of action processed
     */
    private List<ActionResult> actionResults;
}
