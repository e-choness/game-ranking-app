using game_ranking.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace game_ranking.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController : ControllerBase
{

    private static readonly IEnumerable<ItemModel> Items = new[]
    {
        new ItemModel() { Id = 1, Title = "Skyrim", ImageId = 1, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 2, Title = "Oblivion", ImageId = 2, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 3, Title = "Morrowind", ImageId = 3, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 4, Title = "Prey", ImageId = 4, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 5, Title = "Deus Ex", ImageId = 5, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 6, Title = "Disco Elysium", ImageId = 6, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 7, Title = "Divine Divinity", ImageId = 7, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 8, Title = "Gothic", ImageId = 8, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 9, Title = "Mass Effect", ImageId = 9, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 10, Title = "Dragon Age", ImageId = 10, Ranking = 0, ItemType = 1 }
    };

    [HttpGet("{type:int}")]
    public ItemModel[] Get(int type)
    {
        return Items.Where(item => item.ItemType == type).ToArray();
    }

}