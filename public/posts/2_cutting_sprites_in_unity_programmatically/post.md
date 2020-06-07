# Cutting sprites in Unity programmatically

<time datetime="2020-06-06">06 Jun, 2020</time>

If you want to split your sprite to convey some sort of effect there are many ways of dealing with it, this tutorial uses a solution that can be used for every sprite in a game without too many manual configuration. Basically a single script that is attached to a object with a SpriteRenderer and easily cut the sprite.

<div class="important">
<p>
To be clear, this solution does not cover cuts in diagonal. The sprites are only split in straight lines.
</p>
</div>

![a sprite being cut in half and its parts moving apart]()

_This is the end result of this tutorial, but keep in mind that you can edit the script to cut the sprite in n parts._

- [Example scenario](#sprites)

## Example scenario <a name = "sprites"></a>

Given a character that has an animation the script should cut his sprite in half in a way that each part can be headed to a different direction.

![sprite of a 4 arm wizzard]()
https://opengameart.org/content/bosses-and-monsters-spritesheets-ars-notoria
_The character animation that will be used_

# Code

The first step is to declare the MonoBehaviour class that will contain the the method to cut the sprite.

```
public class SpriteCutter : MonoBehaviour
{
    [ContextMenu("Cut sprite from editor")]
    public void CutSpriteFromEditor()
    {
        CutSpriteHorizontally(GetComponent<SpriteRenderer>(), transform.position);
    }

    public GameObject[] CutSpriteHorizontally(SpriteRenderer renderer, Vector2 spritePosition) { }
}
```

Notice that the method returns an array that will hold the reference for the parts cutted. This is necessary since new behaviour will be added to those parts (heading different directions) and doing it doesn't seem like a responsibility for the SpriteCutter component.

Another important thing is the CutSpriteFromEditor method, that makes it possible to call the method without being in game.

![image of the context menu functionality in the inspector]()

_The option appears in the inspector as shown in the image._

Inside the CutSpriteHorizontally method we will declare the first variables.

```
// this one for simplicity
var spriteToCut = renderer.sprite;

// this one defines the height for each new sprite
var ySpriteSize = spriteToCut.texture.height / 2;
```

We can then use the texture from the original sprite to create two new sprites each with half of the original. The problem behind that is the texture. The `spriteToCut.texture` holds a reference to the **entire sprite sheet**. Unity knows how to render the right piece of the sprite sheet by referring to the rect property in the sprite.

This means that we need to use the rect x and y position as our guide while cutting the sprite.

```
var upperSprite = Sprite.Create(
    spriteToCut.texture,
    new Rect(
        spriteToCut.rect.x,
        spriteToCut.rect.y + ySpriteSize,
        spriteToCut.rect.width,
        ySpriteSize),
    Vector2.zero,
    spriteToCut.pixelsPerUnit,
    0,
    SpriteMeshType.FullRect);
```

![explain the rect arguments]()

_The image explains each argument of the rect object passed to the Create method._

The pivot is set as Vector2.zero. This is highly important since it will be used for later calculus to place the new sprites in the same position as the last one.

We're keeping the same pixel per unit value as the original sprite.

The zero I don't know.

The SpriteMeshType is important since it's more performatic, you can read more about it here:

Finally the lower body method call will be like that:

```
var lowerSprite = Sprite.Create(
    spriteToCut.texture,
    new Rect(
        spriteToCut.rect.x,
        spriteToCut.rect.y,
        spriteToCut.rect.width,
        ySpriteSize),
    Vector2.zero,
    spriteToCut.pixelsPerUnit,
    0,
    SpriteMeshType.FullRect);
```

That could have been written as a loop, however since it's only two sprites it made sense to me to leave it like this for easier readability. However I highly recommend writing a loop if you're aiming for more cuts.

Now the easy part is to create new game objects that will hold the SpriteRenderer component. Notice that the script also sets the same material as the original one to keep the standard.

```
var upperBody = new GameObject("Upper Body");
var lowerBody = new GameObject("Lower Body");

var upperBodyRenderer = upperBody.AddComponent<SpriteRenderer>();
upperBodyRenderer.sprite = upperSprite;
upperBodyRenderer.material = spriteRenderer.material;

var lowerBodyRenderer = lowerBody.AddComponent<SpriteRenderer>();
lowerBodyRenderer.sprite = lowerSprite;
lowerBodyRenderer.material = spriteRenderer.material;
```

If you run the method in the Unity inspector
