
CREATE TABLE "O_HM_PLT" (
        "IDENTIFIER" CHAR(10) NOT NULL CONSTRAINT "O_HM_PLT_IDENTIFIER" PRIMARY KEY,
        "AGR_EFF_DT" DATE DEFAULT NULL,
        "APRVL_NO" CHAR(10) DEFAULT NULL,
        "APV_STC" SMALLINT NOT NULL,
        "CHDP_RF_DT" DATE DEFAULT NULL,
        "CHDP_RQIND" CHAR(1) NOT NULL,
        "DFPRNT_IND" CHAR(1) NOT NULL,
        "SOC158_DOC" CHAR(10)  DEFAULT NULL,
        "AFDC_PRDOC" CHAR(10)  DEFAULT NULL,
        "AGNFP_ADOC" CHAR(10)  DEFAULT NULL,
        "AGNGH_ADOC" CHAR(10)  DEFAULT NULL,
        "EMRG_PLIND" CHAR(1)  NOT NULL,
        "END_DT" DATE DEFAULT NULL,
        "EXMP_HMIND" CHAR(1)  NOT NULL,
        "GHM_PLCIND" CHAR(1)  NOT NULL,
        "INT_NTC_DT" DATE DEFAULT NULL,
        "PAYEETPC" SMALLINT NOT NULL ,
        "PND_LICIND" CHAR(1)  NOT NULL,
        "PLCG_RNC" SMALLINT NOT NULL ,
        "PROGRAM_NO" CHAR(10)  NOT NULL ,
        "SCP_RLTC" SMALLINT NOT NULL,
        "EXT_APVNO" CHAR(10)  DEFAULT NULL,
        "XT_APV_STC" SMALLINT NOT NULL,
        "START_DT" DATE NOT NULL,
        "PAYEE_ENDT" DATE DEFAULT NULL,
        "SUBP_FSTNM" CHAR(20)  NOT NULL ,
        "SUBP_LSTNM" CHAR(25)  NOT NULL ,
        "SUBP_MIDNM" CHAR(1)  NOT NULL ,
        "PYE_STRTDT" DATE DEFAULT NULL,
        "YOUAKM_CD" CHAR(1)  NOT NULL ,
        "LST_UPD_ID" CHAR(3)  NOT NULL,
        "LST_UPD_TS" TIMESTAMP NOT NULL,
        "FKPLC_HM_T" CHAR(10)  NOT NULL,
        "FKPLC_EPST" CHAR(10)  NOT NULL,
        "FKPLC_EPS0" CHAR(10)  NOT NULL,
        "PL_RTNLDSC" CHAR(254)  NOT NULL ,
        "REMVL_DSC" CHAR(210)  NOT NULL ,
        "SCPROXIND" CHAR(1)  NOT NULL ,
        "HEP_DT" DATE DEFAULT NULL,
        "SBPLRSNC" SMALLINT NOT NULL ,
        "SIBPLC_TXT" CHAR(10)  DEFAULT NULL,
        "SCPROX_TXT" CHAR(10)  DEFAULT NULL,
        "GRDDEP_IND" CHAR(1)  NOT NULL DEFAULT 'N',
        "SCH_PPL_CD" CHAR(2)  DEFAULT NULL,
        "SIBTGHR_CD" CHAR(2)  DEFAULT NULL,
        "TDCNSL_IND" CHAR(1)  NOT NULL DEFAULT 'N',
        "TDAGR_DT" DATE DEFAULT NULL,
        "CPWNMD_IND" CHAR(1)  NOT NULL DEFAULT 'N',
        "CPWNMD_CNT" SMALLINT DEFAULT NULL
    );