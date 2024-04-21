const RankingGrid = ({ items, images, onDrop, onDragOver, onDragStart }) => {
  const rankingGrid = [];
  const cellCollectionA = [];
  const cellCollectionB = [];
  const cellCollectionC = [];
  const cellCollectionD = [];

  function populateCellCollection(cellCollection, label, rankNumber) {
    const markUp = <div></div>;
    if (rankNumber > 0) {
      var item = items.find((i) => i.ranking === rankNumber);
      markUp = (
        <div
          id={`rank-${rankNumber}`}
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="rank-cell"
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

  function createCellsForRows(row) {
    const rankNumber = 0;
    const currentCollection = [];
    const label = "";
    const cellNumber = 5;
    for (var i = 0; i < cellNumber; i++) {
      rankNumber = cellNumber * row + i - row + 1;

      switch (row) {
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
    for (var row = 0; row < maxRows; row++) {
      createCellsForRows(row);
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
