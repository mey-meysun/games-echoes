const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Pin,
		C3.Behaviors.MoveTo,
		C3.Plugins.Keyboard,
		C3.Plugins.NinePatch,
		C3.Plugins.Text,
		C3.Plugins.Arr,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Behaviors.Fade,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Bullet,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Behaviors.EightDir,
		C3.Behaviors.Tween,
		C3.Plugins.Spritefont2,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.TiledBg.Cnds.PickDistance,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Plugins.Text.Cnds.PickDistance,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Behaviors.Pathfinding.Cnds.OnPathFound,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Text.Cnds.IsRunningTypewriterText,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.Signal,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.scrollto.Acts.SetEnabled,
		C3.Behaviors.scrollto.Acts.Shake,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Acts.SetLayerScale,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.WaitForSignal,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.NinePatch.Cnds.PickDistance,
		C3.Plugins.NinePatch.Acts.SetVisible,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.System.Exps.viewportheight,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.len,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Spritefont2.Exps.Text,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Exps.left,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.Text.Exps.Opacity,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.SetPaused
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{Solid: 0},
	{Tilemap: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Mc: 0},
	{walk: 0},
	{ID: 0},
	{npc: 0},
	{Pin: 0},
	{MoveTo: 0},
	{cameras: 0},
	{Keyboard: 0},
	{tback: 0},
	{back: 0},
	{id: 0},
	{Sprite: 0},
	{Array: 0},
	{isLocked: 0},
	{Sine: 0},
	{prompt: 0},
	{splash: 0},
	{Audio: 0},
	{lorongGelap: 0},
	{lorong: 0},
	{trigger: 0},
	{trigger_awal: 0},
	{trigger2: 0},
	{Mouse: 0},
	{splash2: 0},
	{back2: 0},
	{trigger3: 0},
	{trigger4: 0},
	{prompt2: 0},
	{prompt3: 0},
	{prompt4: 0},
	{dungeon: 0},
	{Tilemap2: 0},
	{Fade: 0},
	{flash: 0},
	{trigger23: 0},
	{chest: 0},
	{hantuhealth: 0},
	{Pathfinding: 0},
	{movement: 0},
	{POCI: 0},
	{walkpoci: 0},
	{playerhealth: 0},
	{Flash: 0},
	{mc2: 0},
	{walkmc2: 0},
	{Bullet: 0},
	{item: 0},
	{hati: 0},
	{hati2: 0},
	{hati3: 0},
	{gameover: 0},
	{text_restart: 0},
	{trigger_awal2: 0},
	{camera2: 0},
	{lengan: 0},
	{prompt5: 0},
	{prompt6: 0},
	{trigger5: 0},
	{prompt7: 0},
	{prompt8: 0},
	{prompt9: 0},
	{prompt10: 0},
	{trigger6: 0},
	{trigger7: 0},
	{mata: 0},
	{kaki: 0},
	{Touch: 0},
	{JUDUL: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{tilemapp: 0},
	{TiledBackground3: 0},
	{TextBG: 0},
	{space: 0},
	{cewe: 0},
	{cowo: 0},
	{Text: 0},
	{triggerend: 0},
	{TiledBackground4: 0},
	{TextLT: 0},
	{TextBG3: 0},
	{TextLT2: 0},
	{edgmaker: 0},
	{Text2: 0},
	{TextBG2: 0},
	{trigger1: 0},
	{trigger24: 0},
	{triggerdes1: 0},
	{triggerdes2: 0},
	{TiledBackground5: 0},
	{move: 0},
	{state: 0},
	{"8Direction": 0},
	{cewe2: 0},
	{TiledBackground6: 0},
	{action: 0},
	{cewe3: 0},
	{Tween: 0},
	{visible: 0},
	{trigger25: 0},
	{Spritefont3: 0},
	{Text3: 0},
	{edgeMaker: 0},
	{mc3: 0},
	{startBackground: 0},
	{playerCowo: 0},
	{kamera: 0},
	{textEnding: 0},
	{textBag3: 0},
	{endingbackground: 0},
	{textEnd: 0},
	{player: 0},
	{playerr2: 0},
	{textDialogCowo: 0},
	{textdialog: 0},
	{text2isi: 0},
	{kameras: 0},
	{textIsiCowo: 0},
	{textIsi: 0},
	{text2cowo: 0},
	{Family1: 0},
	{NPC: 0},
	{NPCdialog: 0},
	{playerHP: 0},
	{endzoom: 0},
	{endzoom2: 0},
	{playerHP2: 0},
	{playerHP3: 0},
	{NPC2: 0},
	{NPCdialog2: 0},
	{Dialogcowo: 0},
	{transition_duration: 0},
	{final_size: 0},
	{layout2: 0}
];

self.InstanceType = {
	background: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	Mc: class extends self.ISpriteInstance {},
	walk: class extends self.ISpriteInstance {},
	npc: class extends self.ISpriteInstance {},
	cameras: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	tback: class extends self.IWorldInstance {},
	back: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Array: class extends self.IArrayInstance {},
	prompt: class extends self.ISpriteInstance {},
	splash: class extends self.ITiledBackgroundInstance {},
	Audio: class extends self.IInstance {},
	lorongGelap: class extends self.ITiledBackgroundInstance {},
	lorong: class extends self.ITilemapInstance {},
	trigger: class extends self.ISpriteInstance {},
	trigger_awal: class extends self.ISpriteInstance {},
	trigger2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	splash2: class extends self.ITiledBackgroundInstance {},
	back2: class extends self.ITextInstance {},
	trigger3: class extends self.ISpriteInstance {},
	trigger4: class extends self.ISpriteInstance {},
	prompt2: class extends self.ISpriteInstance {},
	prompt3: class extends self.ISpriteInstance {},
	prompt4: class extends self.ISpriteInstance {},
	dungeon: class extends self.ITiledBackgroundInstance {},
	Tilemap2: class extends self.ITilemapInstance {},
	flash: class extends self.ISpriteInstance {},
	trigger23: class extends self.ISpriteInstance {},
	chest: class extends self.ISpriteInstance {},
	POCI: class extends self.ISpriteInstance {},
	walkpoci: class extends self.ISpriteInstance {},
	mc2: class extends self.ISpriteInstance {},
	walkmc2: class extends self.ISpriteInstance {},
	item: class extends self.ISpriteInstance {},
	hati: class extends self.ISpriteInstance {},
	hati2: class extends self.ISpriteInstance {},
	hati3: class extends self.ISpriteInstance {},
	gameover: class extends self.ITextInstance {},
	text_restart: class extends self.ITextInstance {},
	trigger_awal2: class extends self.ISpriteInstance {},
	camera2: class extends self.ISpriteInstance {},
	lengan: class extends self.ISpriteInstance {},
	prompt5: class extends self.ISpriteInstance {},
	prompt6: class extends self.ISpriteInstance {},
	trigger5: class extends self.ISpriteInstance {},
	prompt7: class extends self.ISpriteInstance {},
	prompt8: class extends self.ISpriteInstance {},
	prompt9: class extends self.ISpriteInstance {},
	prompt10: class extends self.ISpriteInstance {},
	trigger6: class extends self.ISpriteInstance {},
	trigger7: class extends self.ISpriteInstance {},
	mata: class extends self.ISpriteInstance {},
	kaki: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	JUDUL: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	tilemapp: class extends self.ITilemapInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TextBG: class extends self.IWorldInstance {},
	space: class extends self.ISpriteInstance {},
	cewe: class extends self.ISpriteInstance {},
	cowo: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	triggerend: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	TextLT: class extends self.ITextInstance {},
	TextBG3: class extends self.IWorldInstance {},
	TextLT2: class extends self.ITextInstance {},
	edgmaker: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	TextBG2: class extends self.IWorldInstance {},
	trigger1: class extends self.ISpriteInstance {},
	trigger24: class extends self.ISpriteInstance {},
	triggerdes1: class extends self.ISpriteInstance {},
	triggerdes2: class extends self.ISpriteInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	cewe2: class extends self.ISpriteInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	cewe3: class extends self.ISpriteInstance {},
	visible: class extends self.ISpriteInstance {},
	trigger25: class extends self.ISpriteInstance {},
	Spritefont3: class extends self.ISpriteFontInstance {},
	Text3: class extends self.ITextInstance {},
	edgeMaker: class extends self.ISpriteInstance {},
	mc3: class extends self.ISpriteInstance {},
	startBackground: class extends self.ITiledBackgroundInstance {},
	playerCowo: class extends self.ISpriteInstance {},
	kamera: class extends self.ISpriteInstance {},
	textEnding: class extends self.ITextInstance {},
	textBag3: class extends self.ITextInstance {},
	endingbackground: class extends self.ITiledBackgroundInstance {},
	textEnd: class extends self.ITextInstance {},
	player: class extends self.ISpriteInstance {},
	playerr2: class extends self.ISpriteInstance {},
	textDialogCowo: class extends self.ITextInstance {},
	textdialog: class extends self.ITextInstance {},
	text2isi: class extends self.ITextInstance {},
	kameras: class extends self.ISpriteInstance {},
	textIsiCowo: class extends self.ITextInstance {},
	textIsi: class extends self.ITextInstance {},
	text2cowo: class extends self.ITextInstance {},
	Family1: class extends self.ISpriteInstance {}
}