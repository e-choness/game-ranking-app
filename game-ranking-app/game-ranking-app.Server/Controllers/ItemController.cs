using game_ranking_app.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace game_ranking_app.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemController : ControllerBase
{
    private static readonly IEnumerable<ItemModel> Items = new[]
    {
        new ItemModel(id: 1, title: "Skyrim", imageId: 1, rank: 0, itemType: 1),
        new ItemModel(id: 2, title: "Oblivion", imageId: 2, rank: 0, itemType: 1),
        new ItemModel(id: 3, title: "Morrowind", imageId: 3, rank: 0, itemType: 1),
        new ItemModel(id: 4, title: "Prey", imageId: 4, rank: 0, itemType: 1),
        new ItemModel(id: 5, title: "Deus Ex", imageId: 5, rank: 0, itemType: 1),
        new ItemModel(id: 6, title: "Disco Elysium", imageId: 6, rank: 0, itemType: 1),
        new ItemModel(id: 7, title: "Divine Divinity", imageId: 7, rank: 0, itemType: 1),
        new ItemModel(id: 8, title: "Gothic", imageId: 8, rank: 0, itemType: 1),
        new ItemModel(id: 9, title: "Mass Effect", imageId: 9, rank: 0, itemType: 1),
        new ItemModel(id: 10, title: "Dragon Age", imageId: 10, rank: 0, itemType: 1)
    };

    [HttpGet("{type:int}")]
    public ItemModel[] Get(int type)
    {
        return Items.Where(i => i.ItemType == type).ToArray();
    }
}