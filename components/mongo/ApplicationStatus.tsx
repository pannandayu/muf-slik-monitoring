const ApplicationStatus: React.FC<{
  statusData: {
    approval_last_status?: string;
    approval_status: string;
    approval_level: number;
    last_approval_date?: string;
    approval_flag: string;
  };
}> = ({ statusData }) => {
  const {
    approval_last_status,
    approval_status,
    approval_level,
    last_approval_date,
    approval_flag,
  } = statusData;
  return (
    <div>
      <h2>The status of this application is...</h2>
      <h3>
        {approval_last_status
          ? "Last apprv. status = " +
            `${
              approval_last_status.startsWith("APPR")
                ? "APPROVED"
                : approval_last_status.startsWith("PEND")
                ? "PENDING"
                : "REJECTED"
            }`
          : "Apprv. status = " + approval_status}{" "}
        on level {approval_level}{" "}
        {last_approval_date
          ? `@${last_approval_date.replaceAll("-", "/")}`
          : ""}{" "}
        and{" "}
        {approval_flag === "CLOSED"
          ? " already " + approval_flag
          : approval_flag}
        .
      </h3>
    </div>
  );
};

export default ApplicationStatus;
