namespace game_ranking_app.Server.Model;

public class ItemModel
{
    public ItemModel()
    {
    }

    public ItemModel(int id, string title, int imageId, int rank, int itemType)
    {
        Id = id;
        Title = title;
        ImageId = imageId;
        Rank = rank;
        ItemType = itemType;
    }

    public int Id { get; set; }
    public string Title { get; set; }
    public int ImageId { get; set; }
    public int Rank { get; set; }
    public int ItemType { get; set; }
}