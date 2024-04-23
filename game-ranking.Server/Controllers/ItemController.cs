using game_ranking.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace game_ranking.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController
{
    private static readonly IEnumerable<ItemModel> Items = new[]
    {
        new ItemModel() { Id = 1, Title = "Skyrim", ImageId = 1, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 2, Title = "Oblivion", ImageId = 2, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 3, Title = "Morrowind", ImageId = 3, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 4, Title = "Enderal", ImageId = 4, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 5, Title = "Gothic", ImageId = 5, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 6, Title = "MassEffect", ImageId = 6, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 7, Title = "DragonAge", ImageId = 7, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 8, Title = "DivineDivinity", ImageId = 8, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 9, Title = "Diablo", ImageId = 9, Ranking = 0, ItemType = 1 },
        new ItemModel() { Id = 10, Title = "DiscoElysium", ImageId = 10, Ranking = 0, ItemType = 1 }
    };

    [HttpGet("{type:int}")]
    public IEnumerable<ItemModel> Get(int type = 1)
    {
        return Items.Where(item => item.ItemType == type).ToArray();
    }
}