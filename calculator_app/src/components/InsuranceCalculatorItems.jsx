function InsuranceCalculatorItems({ houseItems }) {
  const styles = {
    heading: `text-3xl text-center mb-3`,
    formcontainer: `flex max-w-7xl mx-auto bg-violet-400 rounded-2xl p-2`,
    table: `border-2 min-w-fit w-full`,
    label: `ml-1 mb-1 text-lg`,
    inputfield: `rounded-2xl p-2 border-none focus:outline-none w-1/2`,
  };

  const renderColumn = () =>
    houseItems.map((item) => {
      return (
        <tr key={item.id} className={styles.column}>
          <td>{item.name}</td>
          <td>{item.value}</td>
        </tr>
      );
    });
  return (
    <>
      <div className="p-2">
        <div className={styles.formcontainer}>
          <table className={styles.table}>
            <tr key={"headings"}>
              <th className="text-left">Gegegenstandsname</th>
              <th className="text-left">Wert</th>
            </tr>
            {renderColumn()}
          </table>
        </div>
      </div>
    </>
  );
}
export default InsuranceCalculatorItems;
