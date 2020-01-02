package io.stacs.nav.drs.api.model.identity;


import io.stacs.nav.drs.api.enums.ApiConstants;
import io.stacs.nav.drs.api.model.BaseTxVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * froze/unfroze identity bd(Code)s
 *
 * @author ganxiang
 * @date 2019/10/16
 */
@Setter @Getter @ToString(callSuper = true) public class IdentityBDManageVO extends BaseTxVO {

    @NotBlank @Length(max = 40) private String targetAddress;

    @NotEmpty private String[] BDCodes;
    /**
     * type: froze/ unfroze
     */
    @NotBlank private String actionType;

    @Override public String getMethodSign() {
        return ApiConstants.TransactionApiEnum.IDENTITY_BD_MANAGE.getFunctionName();
    }

    @Override public String getFunctionName() {
        if (StringUtils.isEmpty(super.getFunctionName())) {
            return this.getMethodSign();
        }
        return super.getFunctionName();
    }
    @Override
    public String getSignValue(){
        return super.getSignValue()
            + targetAddress
            + actionType
            + String.join(",",BDCodes)
            + getFunctionName();
    }
}
