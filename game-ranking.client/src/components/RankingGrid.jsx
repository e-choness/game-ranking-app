const RankingGrid = ({ items, images, onDrop, onDragOver, onDragStart }) => {
  // const RankingGrid = ({ items, images }) => {
  const rankingGrid = [];
  const cellCollectionA = [];
  const cellCollectionB = [];
  const cellCollectionC = [];
  const cellCollectionD = [];

  function populateCellCollection(cellCollection, label, rankNumber) {
    var markUp = <div></div>;
    if (rankNumber > 0) {
      var item = items.find((i) => i.ranking === rankNumber);
      markUp = (
        <div
          id={`rank-${rankNumber}`}
          className="rank-cell"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          {item != null ? (
            <img
              id={`item-${item.id}`}
              src={images.find((img) => img.id === item.imageId)?.image}
              draggable="true"
              onDragStart={onDragStart}
            />
          ) : null}
        </div>
      );
    } else {
      markUp = (
        <div className="row-label">
          <h4>{label}</h4>
        </div>
      );
    }
    cellCollection.push(markUp);
  }

  function createCellsForRow(rowNumber) {
    var rankNumber = 0;
    var currentCollection = [];
    var label = "";
    const cellNumber = 6;

    for (var i = 0; i < cellNumber; i++) {
      rankNumber = i === 0 ? 0 : cellNumber * rowNumber + i - rowNumber;
      switch (rowNumber) {
        case 0:
          currentCollection = cellCollectionA;
          label = "A Tier";
          break;
        case 1:
          currentCollection = cellCollectionB;
          label = "B Tier";
          break;
        case 2:
          currentCollection = cellCollectionC;
          label = "C Tier";
          break;
        case 3:
          currentCollection = cellCollectionD;
          label = "D Tier";
          break;
        default:
          break;
      }

      populateCellCollection(currentCollection, label, rankNumber);
    }
  }

  function createCellsForRows() {
    const maxRows = 4;
    var row = 0;
    for (row = 0; row < maxRows; row++) {
      createCellsForRow(row);
    }
  }

  function createRowsForGrid() {
    rankingGrid.push(<div className="rank-row a-tier">{cellCollectionA}</div>);
    rankingGrid.push(<div className="rank-row b-tier">{cellCollectionB}</div>);
    rankingGrid.push(<div className="rank-row c-tier">{cellCollectionC}</div>);
    rankingGrid.push(<div className="rank-row d-tier">{cellCollectionD}</div>);
    return rankingGrid;
  }

  function createRankingGrid() {
    createCellsForRows();
    return createRowsForGrid();
  }
  return <div className="rankings">{createRankingGrid()}</div>;
};

export default RankingGrid;
