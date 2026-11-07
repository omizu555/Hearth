/**
 * Japanese locale (日本語). Translated from `en.ts` of Hearth 3.6.0.
 *
 * Terminology follows Obsidian's official Japanese UI (vault → 保管庫,
 * properties → プロパティ, …). Icon names, search-bar examples and other values
 * the code parses (e.g. clip filter syntax) are intentionally left in English,
 * as in the other locales.
 */
import type { Translations } from "./index";

export const ja: Translations = {
	// ---- Commands (command palette) & ribbon ---------------------------
	commands: {
		openHome: "ホームダッシュボードを開く",
		newNote: "新規ノートを作成（デフォルトの場所）",
		newDrawing: "Excalidrawの図面を新規作成",
		recordVoice: "音声録音を開始/停止",
		openDailyNote: "今日のデイリーノートを開く",
		runSetup: "Hearthをセットアップ（初回セットアップウィザード）",
		searchTips: "検索のヒントを表示",
		switchDashboard: (n: number) => `ダッシュボード${n}に切り替え`,
		openDashboard: (n: number) => `ダッシュボード${n}を開く`,
		nextDashboard: "次のダッシュボード",
		previousDashboard: "前のダッシュボード",
	},
	ribbon: {
		openHome: "Hearthのホームを開く",
	},

	// ---- Notices (transient toasts) ------------------------------------
	notices: {
		couldNotCreateNote: "Hearth: 新規ノートを作成できませんでした。",
		operonTaskMissing:
			"Hearth: そのOperonタスクのノートは保管庫にもうありません。",
		operonRechecked: "Hearth: Operonとの接続を再確認しました。",
		operonWriteFailed: (reason: string) => `Hearth: Operonが変更を拒否しました — ${reason}`,
		/** A refused create, with the Operon setting that decided the target —
		 * the error alone names a configured target without saying which one. */
		operonCreateFailed: (reason: string, where: string) =>
			`Hearth: Operonがタスクの作成を拒否しました — ${reason} ${where} ` +
			"Operonの設定で変更するか、このカードの設定の「新しいタスク」で" +
			"別の作成先を選んでください。",
		/** The mutation may have landed. Hearth has already spent its one legal
		 * recovery attempt, so the honest report is "unknown", not "failed" —
		 * and never an offer to retry, which could apply the change twice. */
		operonWriteUnknown: (reason: string) =>
			`Hearth: 変更が適用されたかどうかをOperonが確認できませんでした（${reason}）。` +
			"カードは読み込み直しました。もう一度試す前にタスクを確認してください。",
		enableExcalidraw:
			"Hearth: 図面を作成するにはExcalidrawプラグインを有効にしてください。",
		excalidrawCommandMissing:
			"Hearth: Excalidrawの「新規図面」コマンドが見つかりませんでした。",
		enableAudioRecorder: "Hearth: コアプラグインの「オーディオレコーダー」を有効にしてください。",
		couldNotRecordVoice: "Hearth: 音声録音を開始できませんでした。",
		enableDailyNotes: "Hearth: コアプラグインの「デイリーノート」を有効にしてください。",
		couldNotOpenDaily: "Hearth: 今日のデイリーノートを開けませんでした。",
		couldNotOpenPeriodic: "Hearth: Periodic Notesでそのノートを作成できませんでした。",
		couldNotCreateJournalNote: "Hearth: Journalsでそのノートを作成できませんでした。",
		commandNotFound: (id: string) => `Hearth: コマンドが見つかりません: ${id}`,
		couldNotCreateNoteForDay: (day: string) =>
			`Hearth: ${day}のノートを作成できませんでした。`,
		couldNotCreateEventNote: "Hearth: その予定のノートを作成できませんでした。",
		taskNotesCreateFailed: "Hearth: TaskNotesの新規タスク作成コマンドを実行できませんでした。",
		taskChangedOnDisk: "Hearth: そのタスクはディスク上で変更されていたため、再読み込みしました。",
		couldNotOpenTaskNote: "Hearth: そのタスクのノートを開けませんでした。",
		couldNotUpdateTaskStatus: "Hearth: タスクのステータスを更新できませんでした。",
		couldNotCompleteRecurring:
			"Hearth: 繰り返しタスクの今回分を完了にできませんでした。",
		couldNotUndoRecurring:
			"Hearth: 繰り返しタスクの完了を取り消せませんでした。",
		couldNotAddKanbanCard: "Hearth: Kanbanボードにカードを追加できませんでした。",
		couldNotConvertCard: "Hearth: カードをノートに変換できませんでした。",
		templaterNoTemplate: (path: string) =>
			`Hearth: テンプレートが見つかりません: ${path}`,
		templaterFailed: (name: string) =>
			`Hearth: Templaterで${name}からノートを作成できませんでした。`,
		templaterCreated: (path: string) => `Hearth: ${path}を作成しました`,
		newNoteTemplaterMissing:
			"Hearth: 「新規ノート」ボタンにTemplaterのテンプレートが設定されていますが、" +
			"Templaterが有効になっていないため、空のノートを作成します。",
		exported: "Hearth: エクスポートしました。",
		layoutExported: "Hearth: レイアウトをエクスポートしました。",
		layoutImported: "Hearth: レイアウトをインポートしました。",
		layoutImportError: (error: string) => `Hearth: ${error}`,
		exportedToVault: (file: string) =>
			`Hearth: ${file}を保管庫のルートフォルダに保存しました。`,
		exportFailed: "Hearth: エクスポートファイルを保存できませんでした。",
		cardCopied: "カードをダッシュボードにコピーしました。",
	},

	// ---- The home view -------------------------------------------------
	view: {
		displayName: "ホーム",
	},

	// ---- Header / search bar -------------------------------------------
	header: {
		newNote: "新規ノート",
		newNoteAria: "新規ノートを作成",
		searchOnline: "Webで検索",
		searchOnlineAria: "入力中の語句をWebで検索",
		searchOnlinePickAria: "検索エンジンを選択",
		searchEngineDefault: (name: string) => `${name}（デフォルト）`,
	},
	search: {
		placeholder: "保管庫を検索",
		noMatches: "一致するものはありません",
		noMatchingCommands: "一致するコマンドはありません",
		tips: {
			title: "検索バーでできること",
			intro: "Hearthの検索バーに、次のように入力できます。",
			introTry: "例をクリックすると試せます。",
			findHeading: "ノートを探す",
			answersHeading: "インスタント回答",
			off: "オフ",
			settingsHint:
				"回答のオン・オフは「設定 → 検索」で切り替えられます。ダッシュボードごとにはダッシュボードの設定で、検索バーカードごとにはカードの設定で切り替えられます。",
			tryAria: (example: string) => `「${example}」を試す`,
			openRow: "検索のヒント",
			openRowDesc: "検索バーでできることの一覧",
			newHint: "新機能: 検索バーが質問に答えます",
			newHintDesc: "計算、通貨、株価、天気、Wikipediaなど — できることを見てみましょう",
			dismiss: "閉じる",
			find: {
				name: {
					title: "名前とパス",
					desc: "文字を入力すると、ノート・ファイル・フォルダを名前で探せます。途中の文字を飛ばしても見つかります。",
					examples: ["meeting", "proj/notes"],
				},
				tag: { title: "タグ", desc: "#で始めると、タグでノートを探せます。", examples: ["#project"] },
				property: {
					title: "プロパティ",
					desc: "key:valueの形で入力すると、フロントマターのプロパティでノートを探せます。",
					examples: ["status:done", "author:ada"],
				},
				command: {
					title: "コマンド",
					desc: ">で始めると、任意のコマンドを実行できます。",
					examples: [">daily note", ">toggle"],
				},
			},
			features: {
				calc: {
					title: "電卓",
					desc: "四則演算、パーセント、単位換算、進数変換ができます。=で始めると必ず計算として扱います。",
					examples: ["1+1", "20% of 150", "10 km to mi", "FF hex to decimal"],
				},
				currency: {
					title: "通貨",
					desc: "今日のレートで換算し、その通貨ペアのチャートも表示します。",
					examples: ["20 CZK to EUR", "100 euros in dollars", "eur/usd"],
				},
				market: {
					title: "株・投資信託・暗号資産",
					desc: "リアルタイムの相場とチャートを表示します。$を付けるか、stockやpriceなどの語を添えてください。",
					examples: ["$AAPL", "apple stock", "bitcoin price"],
				},
				weather: {
					title: "天気",
					desc: "世界中どこでも、現在の天気と数日先までの予報を表示します。",
					examples: ["weather Prague", "london forecast"],
				},
				wiki: {
					title: "Wikipedia",
					desc: "記事の要約を表示します。:de、:csなどを付けると、Wikipediaの言語を選べます。",
					examples: ["wiki Alan Turing", "wiki:de Prag"],
				},
				chance: {
					title: "コイン・サイコロ・乱数",
					desc: "Enterを押すと引き直します。",
					examples: ["coin flip", "roll 2d6", "random 1-10"],
				},
				date: {
					title: "日付",
					desc: "日数を数えたり、日付を足し引きしたりできます。",
					examples: ["days until 2026-12-24", "today + 45 days", "next friday"],
				},
				time: {
					title: "他の地域の時刻",
					desc: "その都市の現在時刻と、ここからの時差を表示します。",
					examples: ["time in Tokyo", "new york time"],
				},
			},
		},
		instant: {
			copyHint: "Enterでコピー",
			openHint: "Enterで詳細を表示",
			copied: (value: string) => `${value}をコピーしました`,
			copyFailed: "クリップボードにコピーできませんでした",
			loading: "読み込み中…",
			invalid: "有効な式ではありません",
			noQuote: (query: string) => `「${query}」の相場データはありません`,
			externalOff: "Hearthの設定で外部への通信が無効になっています",
			rate: (from: string, rate: string, to: string) => `1 ${from} = ${rate} ${to}`,
			days: (n: number) => `${n}日`,
			today: "今日",
			inDays: (n: number) => (n === 1 ? "明日" : `${n}日後`),
			daysAgo: (n: number) => (n === 1 ? "昨日" : `${n}日前`),
			week: (n: number) => `第${n}週`,
			sameTime: "ここと同じ時刻",
			offset: (hours: string) => `こことの時差${hours}時間`,
			noPlace: (place: string) => `「${place}」という場所は見つかりませんでした`,
			noArticle: (query: string) => `「${query}」のWikipedia記事はありません`,
			heads: "表",
			tails: "裏",
			coin: "コイントス",
			between: (min: string, max: string) => `${min}〜${max}の乱数`,
			againHint: "Enterで振り直す",
		},
	},

	// ---- Shared confirm dialog -----------------------------------------
	confirm: {
		confirm: "確認",
		cancel: "キャンセル",
		ok: "OK",
	},

	// ---- "What's new" release-notes dialog -----------------------------
	whatsNew: {
		title: "Hearthの更新内容",
		intro: "アップデートありがとうございます！前回確認したとき以降の変更点です。",
		/** Shown instead of {@link intro} when there are headlines to click. */
		introHint:
			"アップデートありがとうございます！前回確認したとき以降の変更点です。" +
			"各行をクリックすると詳細を読めます。",
		close: "OK",
		footer: "詳しくはプラグインのREADMEをご覧ください。",
		/** The Added / Changed / Fixed group labels. */
		kinds: {
			added: "新機能",
			changed: "変更",
			fixed: "修正",
			removed: "削除",
			deprecated: "非推奨",
			security: "セキュリティ",
			other: "その他",
		},
		filterPlaceholder: "変更点を絞り込む…",
		expandAll: "すべて展開",
		collapseAll: "すべて折りたたむ",
		noMatches: (query: string) => `「${query}」を含む項目はありません。`,
		/** Tooltip on a version's compare/release link. */
		releaseNotes: (version: string) => `GitHubで${version}のリリースノートを見る`,
		/** Label for the header row that folds a release away. */
		releaseToggle: (version: string) => `${version}の変更内容を表示/非表示`,
		/** Tooltip on the `#123` link beside a change. */
		issue: (n: string) => `GitHubのIssue #${n}`,
	},

	// ---- First-run setup wizard ----------------------------------------
	setup: {
		/** Short labels on the progress rail. */
		stepNames: {
			purpose: "用途",
			look: "見た目",
			finish: "仕上げ",
		},
		/** The heading at the top of each step. */
		stepTitles: {
			purpose: "保管庫を何に使っていますか？",
			look: "見た目を選ぶ",
			finish: "ホーム画面はこうなります",
		},
		/** The line under each heading. */
		stepDescs: {
			purpose:
				"当てはまるものをいくつでも選んでください。Hearthが合うカードを用意します。かんたんな3ステップで、" +
				"どれも後から変更できます。",
			look: "作成するダッシュボードに適用されます。ほかのダッシュボードはそれぞれの見た目のままです。",
			finish: "まだ何も変更されていません。次の内容で作成されます。",
		},
		nav: {
			back: "戻る",
			next: "次へ",
			finish: "ダッシュボードを作成",
			skip: "セットアップをスキップ",
		},
		vault: {
			title: "タイトル",
			titleDesc: "ダッシュボードの上部に大きく表示されます。",
			showTitle: "タイトルを表示",
			showTitleDesc: "見出しのないダッシュボードにするにはオフにします。",
			titleIcon: "タイトルアイコン",
			titleIconDesc:
				"タイトルの横に表示するもの。絵文字、数文字のテキスト、LucideアイコンID、保管庫内の画像パス、" +
				"画像URLのいずれかを指定します。空欄にするとHearthのクリスタルを表示します。",
			themeColor: "テーマのアクセントカラーに合わせる",
			themeColorDesc: "見出し（アイコンとタイトル）のどの部分をテーマの色にするかを選びます。",
			themeColorOptions: {
				none: "どちらもしない",
				icon: "アイコン",
				title: "タイトル",
				both: "両方",
			},
			showSearch: "検索バーを表示",
			showSearchDesc: "タイトルの下にある、検索とコマンドの入力欄です。",
		},
		look: {
			designHeading: "デザイン",
			designNote: "この設定はこのダッシュボードだけでなく、Hearth全体に適用されます。「設定 → Hearth → 外観」でいつでも変更できます。",
			terminalNote: "ターミナルモードはHearth全体とすべてのダッシュボードに適用されます。壁紙もカードの質感も描画しないため、ここで選ぶものはこれ以上ありません。試験的な機能です。「設定 → Hearth → 外観」でいつでもオフにでき、オフにするとダッシュボードはその下で設定されているデザインに戻ります。",
			surfaceHeading: "カード",
			backgroundHeading: "背景",
			color: "色",
			colorDesc: "ダッシュボードの背後に塗る単色です。",
			weatherDesc:
				"指定した場所のリアルタイムの空、または1つの天候に固定した空を表示します。" +
				"どの空にするかは下で選びます。",
			layout: "背景の配置",
			layoutDesc:
				"ダッシュボード全体の背後に置くか、上部に帯状のバナーとして置き、" +
				"カードはその下のテーマ本来の背景に並べるかを選びます。",
			layoutFull: "全体の背後",
			layoutBanner: "上部のバナー",
			compact: "間隔を詰める",
			compactDesc: "すき間を狭めて、画面により多く収めます。",
		},
		surfaces: {
			glass: {
				icon: "layers",
				name: "すりガラス",
				desc: "半透明のカード。背後の背景がやわらかくぼけて見えます。",
			},
			solid: {
				icon: "square",
				name: "ソリッド",
				desc: "不透明なパネル。にぎやかな写真の上でもいちばん読みやすい質感です。",
			},
			minimal: {
				icon: "minus",
				name: "ミニマル",
				desc: "カードの面をまったく描かず、コンテンツが背景の上に浮かびます。",
			},
		},
		designs: {
			classic: {
				icon: "square",
				name: "クラシック",
				desc: "これまでどおりのHearth。落ち着いた面と細い枠線のデザインです。",
			},
			expressive: {
				icon: "shapes",
				name: "エクスプレッシブ",
				desc: "Material 3 ExpressiveをHearth全体（カード、ボタン、メニュー、ダイアログ、設定）に、アクセントカラーの色調で適用します。",
			},
			terminal: {
				icon: "terminal",
				name: "ターミナル",
				desc: "すべてのダッシュボードをテキストで表示します。文字グリッドに罫線で描いたカードを並べ、すべての操作にキーが割り当てられます。試験的な機能で、一部のカードはまだ画像として描画されます。",
			},
		},
		backgrounds: {
			default: {
				icon: "image",
				name: "Hearthの壁紙",
				desc: "Hearthが描く丘の風景。テーマに合わせて昼または夜の景色になります。",
			},
			harbour: {
				icon: "anchor",
				name: "港町",
				desc: "灯台、ボート、丘の上の家々を、アクセントカラーのフラットなExpressive風の図形で描きます。",
			},
			weather: {
				icon: "cloud-sun",
				name: "リアルタイムの空",
				desc: "今いる場所の天気から描いた空。天候を固定することもできます。",
			},
			color: {
				icon: "paintbrush",
				name: "単色",
				desc: "画像を使わない1色だけの背景。いちばん軽い選択肢です。",
			},
			none: {
				icon: "ban",
				name: "なし",
				desc: "テーマ本来の背景をそのまま使います。",
			},
		},
		purposes: {
			daily: {
				name: "デイリーノートと日記",
				desc: "今日のノートを中心に置き、カレンダーで日付を移動できます。",
			},
			tasks: {
				name: "タスクとToDo",
				desc: "チェックボックスやタスク系プラグインから読み込んだタスクの一覧です。",
			},
			planning: {
				name: "計画とカレンダー",
				desc: "月・週・日表示のカレンダー。購読しているカレンダーフィードも含めて表示します。",
			},
			browsing: {
				name: "ノートを探す",
				desc: "最近開いたり編集したりしたものと、お気に入りの一覧です。",
			},
			capture: {
				name: "クイックメモとランチャー",
				desc: "新規ノート、検索、コマンドパレットなどのクイックアクションを並べます。",
			},
			insights: {
				name: "保管庫の統計",
				desc: "保管庫の大きさと、これまでの活動量を表示します。",
			},
			reading: {
				name: "読み物とフィード",
				desc: "フォローしているサイトのRSSカードです。",
			},
			ambience: {
				name: "ちょっとした彩り",
				desc: "今いる場所の天気と、ダッシュボードに住む小さなペットです。",
			},
		},
		purpose: {
			count: (n: number) => `ここまでで${n}枚のカードです。`,
			integrationsHeading: "保管庫で見つかったもの",
			feed: "フォローするフィード",
			feedDesc: "よく読むサイトのRSSまたはAtomのアドレスです。カードで後から追加することもできます。",
			feedMissing: "フィードのアドレスを入力すると、フィードカードがダッシュボードに加わります。",
			weatherPlace: "天気の地点",
			weatherMissing: "場所を選ぶと、天気カードがダッシュボードに加わります。",
		},
		integrations: {
			lead:
				"ここでHearthがオンにした項目ごとに、設定済みのカードがこのダッシュボードに追加されます。" +
				"他のプラグインには何もインストール・変更せず、" +
				"このダッシュボード以外には一切手を加えません。",
			recommended: "おすすめ",
			effects: {
				tasknotes:
					"TaskNotesのタスクを読み込むタスクカードを追加します。TaskNotesで設定中の" +
					"フィールド名と完了扱いのステータスは、カード自体に保存されます。",
				kanban: "Kanbanボードを、ドラッグで移動できる列として表示するタスクカードを追加します。",
				dataview: "編集できるクエリをあらかじめ入れたDataviewカードを追加します。",
				datacore: "クエリを書けばすぐ使えるDatacoreカードを追加します。",
				templater:
					"既存のテンプレートごとにボタンを1つずつ並べ、ワンクリックでそのテンプレートから" +
					"ノートを作成できるカードを追加します。",
				git: "リポジトリの状態を表示し、コミットと同期のボタンを備えたGitカードを追加します。",
				operon:
					"OperonのDeveloper APIを通じて読み込むOperonタスクカードを追加します。" +
					"カードを初めて読み込むときに、Operon側の設定でHearthを承認するよう求められます。" +
					"承認されるまでは、カードに何を待っているかが表示されます。",
				bases: "保管庫内のベースを埋め込んだカードを追加します。",
				dailyNotes: "今日のデイリーノートをその場で編集できるカードを追加します。",
				bookmarks: "ブックマークを一覧表示するカードを追加します。",
			},
			taskNotesTitle: "TaskNotesの設定から読み込んで、このカードに保存する値",
			taskNotesStatus: "ステータスのフィールド",
			taskNotesDue: "期限のフィールド",
			taskNotesPriority: "優先度のフィールド",
			taskNotesDone: "完了とみなすステータス",
			taskNotesDoneNone: "未定義 — Hearthは「done」を使います",
		},
		finish: {
			empty:
				"カードが選択されていません。このまま完了することもできます。ダッシュボードは空になり、" +
				"ダッシュボードの配置ボタンからカードを追加できます。",
			target: "このダッシュボードの作成先",
			targetDesc:
				"今のダッシュボードを置き換えるか、切り替えて使える新しいダッシュボードとして追加します。",
			targetReplace: "現在のダッシュボードを置き換える",
			targetNew: "新しいダッシュボードとして追加",
			targetForcedNew:
				"新しいダッシュボードとして追加されます。既存のダッシュボードはすべてそのまま残り、" +
				"置き換えや削除は一切されません。",
			name: "ダッシュボード名",
			nameDesc: "ダッシュボードスイッチャーに表示されます。",
			/** Seed for the new dashboard's name; numbered if already taken. */
			defaultName: "ホーム",
			calloutTitle: "プリセットではなく、出発点です",
			calloutHint:
				"どのカードも、配置ボタン（ダッシュボード右上）から移動・サイズ変更・再設定・削除できます。" +
				"その他の設定は「設定 → Hearth」にあります。このウィザードは" +
				"「設定 → 情報」からいつでも再実行できます。",
			clock: "時計",
			clockDesc: "サイド列の上部に、小さな時計とあいさつを表示します。",
			more: "タイトルとヘッダー",
			why: "これらのカードを選んだ理由",
		},
		plan: {
			/** Fallback names for planned cards that carry no title of their own. */
			names: {
				clock: "時計とあいさつ",
				daily: "今日のノート",
				tasks: "タスク",
				schedule: "カレンダー",
				calendar: "ミニカレンダー",
				recent: "最近のファイル",
				favorites: "お気に入り",
				bookmarks: "ブックマーク",
				links: "リンク",
				stats: "保管庫の統計",
				heatmap: "アクティビティ",
				rss: "フィード",
				weather: "天気",
				pet: "ペット",
				dataview: "Dataview",
				datacore: "Datacore",
				git: "Git",
				base: "Base",
			},
			/** The Quick actions card's seeded buttons. */
			actions: {
				newNote: "新規ノート",
				today: "今日のノート",
				switcher: "クイックスイッチャー",
				search: "検索",
				palette: "コマンド",
			},
			/** Why each card is on the board, shown beside it in the review list. */
			reasons: {
				clock: "時計をオンに設定",
				daily: "デイリーノートと日記",
				dailyNotes: "デイリーノートが有効",
				tasks: "タスクとToDo",
				tasknotes: "TaskNotes向けに設定",
				kanban: "Kanbanボードを読み込み",
				planning: "計画とカレンダー",
				browsing: "ノートを探す",
				bookmarks: "ブックマークが有効",
				capture: "クイックメモとランチャー",
				insights: "保管庫の統計",
				reading: "読み物とフィード",
				ambience: "ちょっとした彩り",
				dataview: "Dataviewがインストール済み",
				datacore: "Datacoreがインストール済み",
				templater: "Templaterのテンプレートを検出",
				git: "Gitがインストール済み",
				operon: "OperonのDeveloper APIが利用可能",
				bases: "保管庫内でベースを検出",
			},
		},
		notice: {
			done: (n: number) =>
				`Hearth: ダッシュボードの準備ができました — ${n}枚のカードを追加しました。`,
		},
	},

	// ---- File pickers --------------------------------------------------
	pickers: {
		fileToEmbed: "埋め込むファイルを選択…",
		command: "コマンドを選択…",
		noteToFavorite: "お気に入りに追加するノートを選択…",
		folder: "フォルダを選択…",
		image: "画像を選択…",
		icon: "Lucideアイコンを検索…",
		iconPlaceholder: "LucideアイコンID",
		iconBrowse: "Lucideアイコンを一覧から選ぶ",
		iconClear: "アイコンをクリア",
		titleIconPlaceholder: "アイコンID、絵文字、画像パスまたはURL",
		titleIconBrowseImage: "保管庫から画像を選択",
	},

	// ---- Dashboard toolbar & card controls -----------------------------
	dashboard: {
		addCard: "カードを追加",
		addCardAria: "ダッシュボードにカードを追加",
		dashboardSettings: "ダッシュボードの設定",
		dashboardSettingsAria: "このダッシュボードの設定を開く",
		showTitles: "タイトルを表示",
		hideTitles: "タイトルを非表示",
		showCardHeaders: "カードのヘッダーを表示",
		hideCardHeaders: "カードのヘッダーを非表示",
		doneArranging: "配置を完了",
		finishArranging: "カードの配置を終了",
		moveResize: "カードの移動・サイズ変更",
		cardSettings: "カードの設定",
		removeCard: "カードを削除",
		removeCardTitle: "カードを削除しますか？",
		removeCardMessage: (name: string) => `「${name}」をダッシュボードから削除しますか？`,
		removeCardConfirm: "削除",
		thisCard: "このカード",
		expandCard: "カードを展開",
		collapseCard: "カードを折りたたむ",
		phonePreview: "スマートフォンの幅でプレビュー",
		phonePreviewOff: "スマートフォンのプレビューを終了",
		moveCardUp: "カードを上へ移動",
		moveCardDown: "カードを下へ移動",
		hideOnNarrow: "狭いダッシュボードでは非表示",
		showOnNarrow: "狭いダッシュボードでも表示",
	},

	// ---- Dashboard switcher & per-dashboard settings -------------------
	dashboards: {
		newDashboard: "新規ダッシュボード",
		defaultName: (n: number) => `ダッシュボード${n}`,
		copySuffix: (name: string) => `${name}のコピー`,
		fallbackName: "ダッシュボード",
		menu: {
			settings: "ダッシュボードの設定…",
			duplicate: "複製",
			exportBoard: "ダッシュボードをエクスポート…",
			importBoard: "ダッシュボードをインポート…",
			delete: "削除",
		},
		deleteTitle: "ダッシュボードを削除しますか？",
		deleteMessage: (name: string, count: number) =>
			`「${name}」と、その${count}枚のカードを削除しますか？この操作は元に戻せません。`,
		deleteConfirm: "削除",
		modal: {
			title: "ダッシュボードの設定",
			deleteDashboard: "ダッシュボードを削除",
			/** Tabs across the top of the dashboard settings modal. */
			tabs: {
				general: "一般",
				plugin: "プラグインビュー",
				single: "カード",
				header: "ヘッダー",
				layout: "レイアウト",
				style: "スタイル",
				background: "背景",
			},
			name: "名前",
			mode: "ダッシュボードの種類",
			modeDesc:
				"Hearthのカードを並べたダッシュボード、1枚のHearthカードでダッシュボード全体を埋めるダッシュボード、ダッシュボード全体を1つのプラグインのビューにするダッシュボードから選びます。種類を切り替えてもこのダッシュボードのカードは保持され、元に戻すと再び表示されます。",
			modeOptions: {
				cards: "カード",
				single: "単一カード",
				plugin: "プラグインビュー",
			},
			modePickViewHint:
				"このダッシュボードにはまだビューがありません。「プラグインビュー」タブで選んでください。",
			modePickCardHint: "このダッシュボードにはまだカードがありません。「カード」タブで追加してください。",
			singleCard: "カード",
			singleCardDesc:
				"このダッシュボードのどのカードで全体を埋めるかを選びます。ほかのカードはダッシュボードに残り、カード表示に戻すと再び表示されます。",
			singleCardEdit: "カードを編集",
			singleCardAdd: "新しいカードを追加",
			pluginViewType: "ビュー",
			pluginViewTypeDesc:
				"このダッシュボードを埋める登録済みのビューを選びます。一覧には現在アプリにあるすべてのビューが表示されるため、有効なプラグインによって内容が変わります。",
			pluginViewTypeNone: "ビューを選択…",
			pluginViewFile: "ファイル",
			pluginViewFileDesc:
				"特定のファイル（キャンバスやExcalidrawの図面など）でビューを開きます。空欄にすると、ビューだけを表示します。",
			pluginViewFileRequiredDesc:
				"このビューには表示するファイルが必要です。このダッシュボードで開くノート、PDF、画像を選んでください。",
			pluginViewHideHeader: "ビュー自体のヘッダーを隠す",
			pluginViewHideHeaderDesc:
				"埋め込んだビューのパンくずリスト、戻る/進むの矢印、三点メニューを非表示にします。ビュー独自のツールバーやタブはそのままです。",
			pluginViewKeepMounted: "バックグラウンドで動かし続ける",
			pluginViewKeepMountedDesc:
				"別のダッシュボードを表示している間も読み込んだままにするので、戻ったときに再読み込みせずすぐに表示されます。動かし続けたくない重いプラグインではオフにしてください。同時に読み込んだままにできるダッシュボードは数個までです。",
			pluginViewFocusable: "ビューにフォーカスを渡す（試験的）",
			pluginViewFocusableDesc:
				"操作中はこのビューをアクティブなペインにして、プラグイン独自のコマンドやホットキーが働くようにします。Obsidianはノートもアクティブなペインで開くため、クリックしたリンクが、ダッシュボードを切り替えるまでビューを置き換えてしまうことがあります。",
			pluginViewPerfNote:
				"埋め込んだビューはプレビューではなく、プラグインそのものが動作しています。そのプラグインを開くのと同じだけ負荷がかかります。専用のタブで重いビューは、ここでも重くなります。",
			switcherIcon: "スイッチャーのアイコン",
			switcherIconDesc:
				"スイッチャーのボタンに表示する絵文字または短いテキストです。空欄なら番号を表示します。",
			switcherLucide: "スイッチャーのLucideアイコン",
			switcherLucideDesc:
				"Lucideアイコン（例:「home」「star」「layout-dashboard」）。一覧から選ぶか、IDを入力します。上の絵文字より優先されます。",
			linkedWorkspace: "連動するワークスペース",
			linkedWorkspaceDesc:
				"このワークスペースを読み込んだときに、自動でこのダッシュボードに切り替えます。コアプラグインの「ワークスペース」が必要です。",
			linkedWorkspaceNone: "なし",
			mobileDefault: "モバイルでのデフォルト",
			mobileDefaultDesc:
				"スマートフォンやタブレットでHearthを読み込んだときに、このダッシュボードを開きます。モバイルのデフォルトにできるダッシュボードは1つだけで、オンにするとほかのダッシュボードの設定は解除されます。",
			titleVisibility: "タイトルの表示",
			titleVisibilityDesc:
				"このダッシュボードのタイトル部分だけを表示または非表示にします。全体設定より優先されます。",
			titleVisibilityDefault: (state: string) => `全体のデフォルトを使用（${state}）`,
			searchVisibility: "検索の表示",
			searchVisibilityDesc:
				"このダッシュボードで、検索・コマンドバーとその結果、フィルターボタンを表示または非表示にします。全体設定より優先されます。",
			searchVisibilityShow: "検索を表示",
			searchVisibilityHide: "検索を非表示",
			searchPlaceholder: "検索欄のプレースホルダー",
			searchPlaceholderDesc:
				"このダッシュボードの検索欄に薄く表示される文字です。空欄にすると標準の文言を使います。",
			newNoteButton: "検索欄の横のボタン",
			newNoteButtonDesc:
				"このダッシュボードの検索欄の横にあるボタンを表示または非表示にします。",
			newNoteButtonStateOn: "表示",
			newNoteButtonStateOff: "非表示",
			newNoteButtonMode: "ボタンの動作",
			newNoteButtonModeDesc:
				"新規ノートを作成するか、検索欄に入力した内容をWebで検索するかを選びます。",
			newNoteButtonModeOptions: {
				newNote: "新規ノート",
				searchOnline: "Webで検索",
			},
			newNoteButtonLabel: "ボタンのラベル",
			newNoteButtonLabelDesc:
				"このダッシュボードでそのボタンに表示する文字です。空欄にすると標準の文言を使います。",
			hiddenFilters: "フィルターチップ",
			hiddenFiltersDesc:
				"保管庫全体の設定に従わず、このダッシュボードの検索バーの下に表示するファイル種別のチップを個別に選びます。",
			hiddenFiltersFollowing: (count: number) =>
				count === 0
					? "保管庫全体の設定に従っています（非表示のチップはありません）。"
					: `保管庫全体の設定に従っています（${count}個を非表示）。`,
			hiddenInstant: "インスタント回答",
			hiddenInstantDesc: "このダッシュボードの検索バーで回答をオフにします。保管庫全体でオフにした回答はオフのままです。",
			hiddenInstantOffVault: "「設定 → 検索」で保管庫全体に対してオフになっています。",
			hiddenInstantVaultOff: "インスタント回答は「設定 → 検索」で保管庫全体に対してオフになっています。",
			stackOnNarrow: "狭いときは1列にする",
			stackOnNarrowDesc:
				"ペインが自由配置のレイアウトには狭すぎるとき（スマートフォンや狭い分割表示など）に、このダッシュボードを全幅の1列に並べ直します。",
			stackOnNarrowStateOn: "1列にする",
			stackOnNarrowStateOff: "レイアウトを維持",
			stackOnNarrowOptionOn: "1列に並べる",
			stackOnNarrowOptionOff: "縮小したレイアウトを維持",
			narrowWidth: "狭い画面とみなす幅",
			arrangeVisibility: "配置ボタン",
			arrangeVisibilityDesc:
				"このダッシュボードで配置ボタンを常に表示するか、ホバー時にだけ表示するかを選びます。",
			switcherVisibility: "ダッシュボードスイッチャー",
			switcherVisibilityDesc:
				"このダッシュボードの表示中に、ダッシュボードスイッチャーを常に表示するか、ホバー時にだけ表示するかを選びます。",
			chromeOptions: {
				always: "常に表示",
				hover: "ホバー時に表示",
			},
			chromeStates: {
				always: "常に表示",
				hover: "ホバー時",
			},
			skyAnimate: "空をアニメーション",
			skyAnimateDesc:
				"このダッシュボードに描かれた天気を、流れたり降ったりきらめいたりさせます。パフォーマンス設定や、閲覧者の「動きを減らす」設定によって静止することがあります。",
			skyAnimateStateOn: "アニメーション",
			skyAnimateStateOff: "静止",
			skyAnimateOptionOn: "アニメーションさせる",
			skyAnimateOptionOff: "静止させる",
			cardDesign: "デザイン",
			cardDesignDesc:
				"このダッシュボードの描き方（カード、ボタン、ここから開くダイアログやメニュー）を、クラシックかMaterial 3 Expressiveから選びます。カード側で個別に指定している場合はそちらが優先されます。",
			skyDesign: "背景のデザイン",
			skyDesignDesc:
				"このダッシュボードの空を、クラシックな描画の空にするか、フラットなMaterial 3 Expressive風の空にするかを選びます。",
			wallpaperDesignDesc:
				"このダッシュボードのHearthの壁紙を、クラシックな丘にするか、アクセントカラーを使ったフラットなMaterial 3 Expressive風の図形にするかを選びます。",
			visibilityDefaultPlugin: (state: string) =>
				`プラグインダッシュボードでのデフォルト（${state}）`,
			visibilityDefaultSingle: (state: string) =>
				`単一カードダッシュボードでのデフォルト（${state}）`,
			visibilityShown: "表示",
			visibilityHidden: "非表示",
			visibilityShow: "タイトルを表示",
			visibilityHide: "タイトルを非表示",
			titleText: "タイトルの文字",
			titleTextDesc: "このダッシュボードでは、全体設定のタイトルの文字の代わりにこれを使います。",
			titleIcon: "タイトルアイコン",
			titleIconDesc:
				"このダッシュボードのタイトルの横に表示するマークです。LucideアイコンID、絵文字または短いテキスト、保管庫内の画像パス、画像URLのいずれかを指定します。空にすると、このダッシュボードだけHearthのクリスタルを表示します。",
			titleAlign: "タイトルの配置",
			titleAlignDesc:
				"タイトル部分だけの配置を設定します。検索バーは独自のレイアウトを保ちます。",
			alignDefault: "デフォルト（中央）",
			alignLeft: "左",
			alignCenter: "中央",
			alignRight: "右",
			titleSize: "タイトルのサイズ",
			titleIconSize: "タイトルアイコンのサイズ",
			titleTopMargin: "タイトルの上余白",
			headerSpacingBelow: "タイトル/ヘッダーの下の間隔",
			contentWidth: "コンテンツの幅",
			fullWidth: "全幅",
			fullWidthDesc: "このダッシュボードの幅の上限設定を上書きします。",
			fullWidthDefault: (state: string) => `全体のデフォルトを使用（${state}）`,
			fullWidthOptionOn: "ペイン全体に広げる",
			fullWidthOptionOff: "幅を制限する",
			fullWidthStateOn: "ペイン全体",
			fullWidthStateOff: "制限あり",
			fitToPage: "ページに合わせる",
			fitToPageDesc: "このダッシュボードのスクロール設定を上書きします。",
			fitDefault: (state: string) => `全体のデフォルトを使用（${state}）`,
			fitStateFit: "合わせる",
			fitStateScroll: "スクロール",
			fitOptionFit: "1ページに収める",
			fitOptionScroll: "スクロールを許可",
			fitToPagePluginNote:
				"プラグインダッシュボードは常にペインに合わせて表示されます。埋め込んだビューがペインを埋め、ビュー自体がスクロールします。",
			fitToPageSingleNote:
				"単一カードダッシュボードは常にペインに合わせて表示されます。カードがペインを埋め、カード自体がスクロールします。",
			themeColorTarget: "タイトルのアクセントカラー",
			themeColorTargetDesc:
				"このダッシュボードの見出し（アイコンとタイトル）のどの部分をテーマのアイコン色に合わせるかを選びます。このダッシュボードでは全体設定より優先されます。Hearthのタブとリボンのアイコンは引き続き全体設定に従います。",
			themeColorTargetDefault: (state: string) => `全体のデフォルトを使用（${state}）`,
			themeColorTargetOptions: {
				none: "どちらもしない",
				icon: "アイコン",
				title: "タイトル",
				both: "両方",
			},
			compact: "間隔を詰める",
			compactDesc: "このダッシュボードの間隔について、全体設定を上書きします。",
			compactDefault: (state: string) => `全体のデフォルトを使用（${state}）`,
			compactOptionOn: "コンパクト",
			compactOptionOff: "ゆったり",
			compactStateOn: "コンパクト",
			compactStateOff: "ゆったり",
			cardOpacity: "カードの不透明度",
			cardBlur: "カードのぼかし",
			cardRadius: "カードの角の丸み",
			cardBorderWidth: "カードの枠線",
			done: "完了",
			overriding: "全体のデフォルトを上書きしています。",
			usingGlobal: (value: number | string) =>
				`全体のデフォルト（${value}）を使用しています。`,
			usingDefault: (value: number | string) =>
				`デフォルト（${value}）を使用しています。`,
			usingDefaultText: (value: string) =>
				`デフォルト（${value}）を使用しています。`,
			background: "背景",
			backgroundDesc: "このダッシュボードの背景について、全体設定を上書きします。",
			backgroundValue: "背景の値",
			opacity: "不透明度",
			blur: "ぼかし",
			backgroundLayout: "背景のレイアウト",
			bannerHeight: "バナーの高さ",
			bannerFade: "下端をフェード",
			bannerFullWidth: "全幅",
			clearOverride: "全体設定に従う",
		},
		useGlobal: "全体のデフォルトを使用",
		on: "オン",
		off: "オフ",
		backgroundLayoutOptions: {
			full: "全面背景",
			banner: "バナー",
		},
		backgroundOptions: {
			default: "全体のデフォルトを使用",
			none: "なし",
			hdefault: "Hearthのデフォルト",
			harbour: "港町",
			color: "単色",
			image: "保管庫内の画像",
			url: "画像URL",
			weather: "リアルタイムの天気の空",
		},
		backgroundValueDesc: {
			color: "CSSの色です。例: #1e1e2e",
			image: "保管庫内の画像のパスです（例: Attachments/bg.png）。",
			url: "画像を直接指すURLです。",
		},
	},

	// ---- Plugin settings tab -------------------------------------------
	settings: {
		/** Shared across every slider/section control. */
		resetSlider: "デフォルトに戻す",
		/** Reset button next to text fields whose factory default is meaningful. */
		resetField: "デフォルトに戻す",
		/** Strapline under the plugin name on the settings index. */
		indexSub: "検索・ダッシュボード・ランチャーをひとつにまとめた、保管庫のホーム画面です。",
		/** Accessible name of the back link on a category page; the visible label is
		 * the plugin's own name. */
		backToIndex: "すべての設定に戻る",
		/** Headings that group the categories on the index. */
		indexGroups: {
			lookFeel: "見た目",
			howItWorks: "動作",
			data: "データとプラグイン",
			etc: "その他",
		},
		/** One line per category, shown on its index row and again at the top of
		 * its page: what a reader will find if they open it. */
		tabDescs: {
			appearance: "デザイン、タイトル、タイトルアイコン、背景、省電力モードを設定します。",
			search: "検索バーと、そこに表示する結果を設定します。",
			dashboard: "グリッド、カードの質感、ダッシュボード周りの操作ボタンを設定します。",
			behaviour: "起動時の動作、ノートの開き方、プライバシーを設定します。",
			mobile: "スマートフォンでの縦並びレイアウトと、アクションバーを設定します。",
			integrations: "TaskNotes、ファイルアイコン、Hearthが読み込むすべてのプラグインを設定します。",
			backup: "レイアウトと設定をエクスポート・インポートします。",
			about: "バージョン、更新情報、問題の報告先を確認できます。",
		},
		/** Shown in place of a settings section (or tab) whose render threw, so a
		 * single failing section can no longer blank the whole settings pane. */
		sectionError: (name: string) => `「${name}」セクションを表示できませんでした。`,
		sectionErrorHint:
			"開発者コンソール（Cmd/Ctrl+Option+I）を開いてエラーを確認し、GitHubで報告してください。ほかの設定には影響しません。",
		/** Category ribbon at the top of the settings tab. */
		tabs: {
			appearance: "外観",
			search: "検索",
			dashboard: "ダッシュボード",
			behaviour: "挙動",
			mobile: "モバイル",
			integrations: "連携",
			backup: "バックアップ",
			about: "情報",
		},
		/** Sub-section headings used to group settings within a tab. */
		sections: {
			performance: "パフォーマンス",
			performanceDesc:
				"装飾にどこまで負荷をかけるかを決めます。視覚効果を減らす代わりに、バッテリーの持ちや、性能の低い端末での滑らかさを優先できます。",
			home: "ホーム",
			homeDesc:
				"タイトル、タイトルとタブのアイコン、検索の表示、コンテンツ全体の幅を設定します。",
			searchBar: "検索バー",
			searchBarDesc: "検索フィールドの見た目と動作を設定します。",
			grid: "グリッドと間隔",
			gridDesc: "カードグリッドのサイズと間隔を設定します。",
			dashboardControls: "ダッシュボードの操作ボタン",
			dashboardControlsDesc: "ダッシュボード周りの操作ボタンの表示を設定します。",
			cardSurface: "カードの質感",
			cardSurfaceDesc:
				"すべてのカードに適用する透明度と、すりガラス風のぼかしを設定します。",
			startup: "起動とタブ",
			startupDesc: "ホーム画面をいつ、どこに開くかを設定します。",
			opening: "ノートの開き方",
			openingDesc: "Hearthでノートをクリックしたときに、どこに開くかを設定します。",
			mobileMode: "レイアウト",
			mobileModeDesc:
				"画面がダッシュボード本来のレイアウトには狭すぎるときの、ダッシュボードの並べ方を設定します。",
			privacy: "プライバシーとネットワーク",
			privacyDesc: "Hearthが行ってよい外部への通信を管理します。",
		},
		about: {
			heading: "Hearthについて",
			headingDesc: "プロジェクトのリンク、サポート、バージョン情報です。",
			setup: "Hearthをセットアップ",
			setupDesc:
				"使い方やインストール済みのプラグインについていくつかの質問に答えると、Hearthがそれに合ったダッシュボードを作ります。" +
				"新しいダッシュボードとして追加されるので、既存の内容は何も変わりません。",
			setupAgain: "ダッシュボードを作成",
			setupAgainDesc:
				"セットアップウィザードをもう一度実行して、別のダッシュボードを作ります。" +
				"常に新しいダッシュボードとして追加されるため、既存のダッシュボードには一切手を加えません。" +
				"設定される内容もすべてそのダッシュボードだけに適用され、保管庫全体の設定は変わりません。",
			setupButton: "セットアップを開始",
			whatsNew: "更新情報",
			whatsNewDesc: "このバージョンと、過去のすべてのバージョンのリリースノートを読めます。",
			whatsNewButton: "変更履歴を表示",
			github: "GitHubリポジトリ",
			githubDesc: "ソースを見たり、プロジェクトにスターを付けたり、変更履歴を読んだりできます。",
			githubButton: "GitHubを開く",
			reportIssue: "問題を報告",
			reportIssueDesc:
				"バグを見つけたときや、機能のアイデアがあるときは、GitHubでIssueを作成してください。",
			reportIssueButton: "問題を報告",
			kofi: "Hearthを支援",
			kofiDesc:
				"Hearthは無料で、これからもずっと無料です。ホーム画面に置く価値があると感じていただけたら、" +
				"チップを送ることができます。完全に任意で、制限される機能はありません。",
			/** Shared by every surface that shows the tip button: this row, the
			 * "What's new" dialog and the card picker's request page. */
			kofiButton: "Ko-fiでチップを送る",
			version: (v: string) => `バージョン${v}`,
			versionDesc: "実行中のHearthのビルドです。",
		},
		appearance: {
			heading: "外観",
			headingDesc: "タイトル、タイトルアイコン、検索バー、コンテンツ全体の幅を設定します。",
			showTitle: "タイトルを表示",
			showTitleDesc: "上部に大きなタイトルとそのアイコンを表示します。",
			showSearch: "検索セクションを表示",
			showSearchDesc:
				"検索・コマンドバーを、結果やフィルターボタンとあわせて表示します。" +
				"ダッシュボードごとの設定で上書きできます。",
			title: "タイトル",
			titleDesc: "ホーム画面の上部に表示する見出しのテキストです。",
			titleIcon: "タイトルアイコン",
			titleIconDesc:
				"タイトルの横に表示するマークです。LucideのアイコンID（🔍ボタンで一覧から選べます）、" +
				"絵文字や数文字の文字、画像の保管庫内パス（📷ボタン）、Web上の画像のURLのいずれかを指定できます。" +
				"空欄にするとHearthのクリスタルになります。ダッシュボードごとの設定で上書きできます。",
			tabIcon: "タブアイコン",
			tabIconDesc:
				"Hearthのタブヘッダーとリボンボタンで、Hearthのクリスタルの代わりに使うLucideアイコンです。" +
				"一覧から選ぶか、IDを入力します。空欄にするとクリスタルになります。",
			themeColorTarget: "テーマのアイコン色に合わせる",
			themeColorTargetDesc:
				"デフォルトの紫のクリスタルと通常の文字色の代わりに、クリスタルのアイコンとタイトル文字の" +
				"一方または両方を、テーマのアイコン色で表示します。",
			themeColorNone: "オフ",
			themeColorIcon: "アイコン",
			themeColorTitle: "タイトル",
			themeColorBoth: "アイコンとタイトル",
			searchPlaceholder: "検索欄のプレースホルダー",
			searchInstantAnswers: "インスタント回答",
			searchInstantAnswersDesc:
				"検索語そのものへの答えを、ノートの上に表示します（計算結果、通貨、株価、天気、Wikipediaの要約など）。" +
				"表示する回答は下で選べます。オンラインの回答は、それを求める検索のときだけ取得します。",
			searchTips: "検索のヒント",
			searchTipsDesc: "検索バーで使える機能を、例とあわせてすべて紹介します。",
			searchTipsButton: "表示",
			searchContents: "ノートの本文も検索",
			searchContentsDesc:
				"名前・タグ・プロパティだけでなく、ノート本文のテキストにも一致させます。" +
				"本文での一致は、名前での一致の後に抜粋付きで表示されます。",
			searchScrollToMatch: "一致箇所までスクロール",
			searchScrollToMatchDesc:
				"検索結果からノートを開いたとき、本文で最初に一致した箇所へ移動してハイライトします。",
			searchEngine: "検索エンジン",
			searchEngineDesc:
				"検索バーで使うエンジンです。「クイックスイッチャー」は、Obsidianのクイックスイッチャーと同じ方法で" +
				"一致を探します（対象はファイルのみ、エイリアスを含む）。" +
				"Omnisearchを使うには、コミュニティプラグインのOmnisearchをインストールして有効にする必要があります。",
			searchEngineBuiltin: "Hearth（内蔵）",
			searchEngineOmnisearch: "Omnisearch",
			searchEngineQuickSwitcher: "クイックスイッチャー",
			omnisearchMissing:
				"Omnisearchがインストールされていないか、有効になっていません。" +
				"インストールして有効にしてから、もう一度選択してください。",
			omnisearchInstallLink: "コミュニティプラグインでOmnisearchを開く",
			showNewNoteButton: "「新規ノート」ボタンを表示",
			showNewNoteButtonDesc: "検索フィールドの横にアクションボタンを表示します。",
			newNoteButtonMode: "検索バーのボタン",
			newNoteButtonModeDesc:
				"検索バーの横にあるボタンの動作です。新規ノートを作成するか、" +
				"検索フィールドの内容でWebを検索します。",
			newNoteButtonModeNewNote: "新規ノート",
			newNoteButtonModeSearchOnline: "Webで検索",
			webSearchEngine: "オンライン検索エンジン",
			webSearchEngineDesc:
				"「Webで検索」ボタンで開くエンジンです。ボタンの横の矢印を使うと、" +
				"この設定を変えずに、その検索だけほかのエンジンで検索できます。",
			newNoteHeading: "「新規ノート」ボタン",
			newNoteHeadingDesc:
				"ボタンで作るノートと、その作成場所を設定します。この設定は、検索バーの横のボタン、" +
				"検索バーカードのボタン、Hearthの「新規ノートを作成」コマンドに共通で使われます。",
			newNoteButtonLabel: "ボタンのテキスト",
			newNoteButtonLabelDesc:
				"ボタンに表示するテキストです。空欄にすると「新規ノート」になります。",
			newNoteTemplate: "テンプレート",
			newNoteTemplateDesc:
				"空白のノートではなく、Templaterのテンプレートからノートを作ります。" +
				"テンプレートの処理はTemplaterが行うため、ユーザースクリプト、" +
				"tp.system.prompt()のダイアログ、カーソル位置の指定は、" +
				"Templater自身のコマンドから使ったときと同じように動作します。",
			newNoteTemplateNone: "空白のノート",
			newNoteTemplatePick: "テンプレートを選択…",
			newNoteTemplateClear: "空白のノートを使う",
			newNoteTemplaterMissing:
				"Templaterが有効になっていません。ここでテンプレートを使うには、インストールして有効にしてください。" +
				"それまでは、ボタンで空白のノートを作成します。",
			newNoteFolder: "作成場所",
			newNoteFolderDesc:
				"新規ノートを入れるフォルダです。まだ存在しない場合は作成されます。" +
				"「デフォルトの場所」は、Obsidianが新規ノートを作成する場所のことです。",
			newNoteFolderClear: "デフォルトの場所を使う",
			newNoteFilename: "ファイル名",
			newNoteFilenameDesc:
				"新規ノートの名前です（拡張子は不要）。{{date}}、" +
				"{{date:FMT}}、{{time}}、{{time:FMT}}、{{prompt}}は置き換えられます。" +
				"{{prompt}}を使うと、クリックするたびに名前を尋ねます。" +
				"空欄にすると「無題」になります。",
			newNoteFilenamePlaceholder: "無題",
			newNoteDestination: (destination: string) => `作成先: ${destination}`,
			contentWidth: "コンテンツの幅",
			contentWidthDesc:
				"ホームのコンテンツが広がれる最大幅（ピクセル）です。幅の指定ではなく上限なので、" +
				"ペインがそれより狭ければ、コンテンツはペインに合わせて縮みます。",
			fullWidth: "全幅",
			fullWidthDesc:
				"下の幅で止めずに、コンテンツをペイン全体に広げます。ペインが広がってもカードは縦横比を保ちますが、" +
				"文字は大きくならないため、非常に広いダッシュボードでは間延びして見えます。",
		},
		performance: {
			tier: "パフォーマンスレベル",
			tierDesc:
				"1段階下げるごとに、ダッシュボードの処理のうち次に負荷の大きいものを止めます。" +
				"下の設定は上書きされないので、レベルを上げ直せば元の設定がそのまま戻ります。",
			tierFull: "フル（すべて有効）",
			tierBalanced: "バランス（空を軽く）",
			tierReduced: "軽量（動きなし）",
			tierMinimal: "最小（簡素で静止）",
			/** One line per tier, shown under the dropdown for the selected one. */
			tierFullDesc:
				"すべての効果を最大の強さで使います。ここで最も負荷が大きいのは、描画される天気の空です。" +
				"ダッシュボードのせいで端末が熱くなるようなら、この設定を下げてください。",
			tierBalancedDesc:
				"描画される空の密度を半分にします。雨粒、星、雲、霧のすじが少なくなります。" +
				"オフになるものも止まるものもなく、量が減るだけで、処理はおよそ3分の1軽くなります。",
			tierReducedDesc:
				"ダッシュボード上の動きをすべて止め、カードの背後のすりガラス効果をオフにします。" +
				"壁紙はそのまま、カードも半透明のままで、各カードはタイマーどおりに更新を続けます。" +
				"ダッシュボードが静止するだけです。",
			tierMinimalDesc:
				"最も軽い設定です。壁紙の代わりに単色を表示し、カードは不透明になり、動きはなく、" +
				"カードがタイマーで自動更新することもありません。",
			pauseWhenUnfocused: "Obsidianが前面にないときはアニメーションを停止",
			pauseWhenUnfocusedDesc:
				"ほかのアプリやほかのウィンドウで作業している間、すべてのアニメーションを止めます。" +
				"別のタブの裏に隠れたHearthタブは、もともと負荷がかかりません。この設定が対象にするのは、" +
				"使っていないウィンドウに表示されているダッシュボード（ブラウザの横や、2台目の画面など）です。" +
				"2台目のディスプレイでダッシュボードを動かし続けたい場合はオフにしてください。",
			color: "最小レベルの背景色",
			colorDesc:
				"最小レベルのとき、ホーム画面の背後に表示する単色です。" +
				"任意のCSSの色を指定できます（例: #4a4459）。",
			/** Bullet list of what the selected tier changes, shown under the dropdown. */
			effects: "このレベルで変わること",
			effectSkyHalf: "描画される天気の空の密度が半分になる",
			effectBackground: "背景は単色になる（画像、GIF、不透明度のレイヤー、ぼかしはなし）",
			effectOpaque: "カードは半透明ではなく不透明になる",
			effectFrost: "カードの背後のすりガラス風ぼかしがなくなる",
			effectMotion: "トランジション、ホバー時の浮き上がり、影、アニメーションがオフになる",
			effectRefresh:
				"Web、RSS、カレンダー購読、Jiraのカードがタイマーで更新しなくなる（手動での更新は可能）",
			effectLiveRefresh: "保管庫が変更されても、ダッシュボードが自動で再構築されなくなる",
			effectClock: "時計カードの秒表示と、動く秒針がなくなる",
			effectSlideshow: "スライドショーカードは画像を切り替えず、1枚を表示し続ける",
			/** Shown beside the card blur when Obsidian's translucent window is on
			 * and the blur is therefore being withheld (#272). */
			vibrancyFrost:
				"Obsidianの「半透明ウィンドウ」がオンの間は、すりガラス効果がオフになります。" +
				"ぼかしとmacOSのバイブランシー効果がウィンドウ全体で互いに再合成され、タブバーがちらつくためです。" +
				"ぼかしの設定は保持され、半透明ウィンドウをオフにするとすぐに元に戻ります。",
			/** Shown in the sections whose settings the tier currently overrides. */
			overridden:
				"現在、パフォーマンスレベルがこれらの設定を上書きしています。" +
				"設定値はそのまま保持され、レベルを上げ直すと再び有効になります。",
		},
		background: {
			heading: "背景",
			headingDesc:
				"ホーム画面の背後に表示する背景と、その透け具合を設定します。",
			type: "背景の種類",
			typeDesc: "ホーム画面の背後に表示するものです。",
			value: "背景の値",
			valueColorDesc: "CSSの色です（例: #1e1e2e、rgb(30,30,46)）。",
			valueImageDesc: "保管庫内の画像のパスです（例: Attachments/bg.png）。",
			valueUrlDesc: "画像を直接指すURLです。",
			externalCallsDisabled:
				"この背景はWebから取得するため、「挙動」の「外部通信を無効にする」がオンの間は表示されません。" +
				"代わりに保管庫内の画像を選ぶか、その設定をオフにしてください。",
			opacity: "不透明度",
			opacityDesc:
				"背景をどれだけはっきり見せるかです。低いほど控えめになります。",
			blur: "ぼかし",
			blurDesc: "背景のぼかし（ピクセル）です。",
			layout: "背景のレイアウト",
			layoutDesc:
				"背景で画面全体を埋めるか、バナーとして表示するかを選びます。バナーは、ノートの上のカバー画像のように" +
				"ダッシュボードの上部に帯状に表示され、その下のカードはテーマ本来の背景の上に並びます。" +
				"ダッシュボードごとの設定で上書きできます。",
			layoutLabels: {
				full: "全面背景",
				banner: "バナー",
			},
			bannerHeight: "バナーの高さ",
			bannerHeightDesc: "バナーの帯の高さ（ピクセル）です。",
			bannerFade: "下端をフェード",
			bannerFadeDesc:
				"バナーの下端をくっきり区切らず、ページに溶け込ませます。",
			bannerFullWidth: "全幅",
			bannerFullWidthDesc:
				"バナーを下のコンテンツの幅に揃えず、端から端まで広げます。",
			labels: {
				default: "Hearthのデフォルト",
				harbour: "港町",
				none: "なし",
				color: "単色",
				image: "保管庫内の画像",
				url: "画像URL",
				weather: "リアルタイムの天気の空",
			},
			weatherHeading: "天気の空",
			weatherDesc:
				"ダッシュボードの背景が、描画された空になります。天気カードのアート風スタイルと同じ空を、ウィンドウ全体に広げたものです。" +
				"特定の場所の実際の天気に合わせる（Open-Meteoから取得。送信するのは座標だけで、" +
				"外部通信がオフの間は何も取得しません）か、1つの空に固定するかを選べます。" +
				"固定する場合は場所の指定が不要で、通信も一切行いません。",
			weatherNoPlace: "空を描くには、下で場所を選んでください。",
			skySource: "空",
			skySourceDesc:
				"どこかの実際の天気に合わせるか、外の天気に関係なく1つの空に固定します。",
			skySourceLive: "リアルタイムの天気",
			skySourceFixed: "固定の空",
			skyCondition: "天候",
			skyConditionDesc: "この空で常に表示する天候です。",
			skyDaylight: "時間帯",
			skyDaylightDesc: "空を時計に合わせるか、常に昼または夜にするかを選びます。",
			skyDaylightAuto: "時計に合わせる",
			skyDaylightDay: "常に昼",
			skyDaylightNight: "常に夜",
			skyAnimate: "空をアニメーション",
			skyAnimateDesc:
				"ダッシュボードの背後で雲が流れ、雨が降り、星がまたたきます。省電力モードのときや、" +
				"システムで「視差効果を減らす」などの動きを抑える設定をしている場合は、常にオフになります。",
			skyDesign: "デザイン",
			skyDesignDesc:
				"クラシックな絵画風の空か、丘や丸みのある雲、回る太陽を描いたフラットなMaterial 3 Expressiveの空を選びます。",
			wallpaperDesignDesc:
				"小屋のあるクラシックな丘（ライトテーマでは朝、ダークテーマでは月夜）か、" +
				"アクセントカラーの色調を使ったフラットなMaterial 3 Expressiveの図形を選びます。" +
				"Hearthが描画するので、何もダウンロードしません。",
			skyDesignClassic: "クラシック（絵画風）",
			skyDesignExpressive: "エクスプレッシブ（フラット）",
		},
		behaviour: {
			heading: "挙動",
			headingDesc:
				"Hearthをいつ、どこに開くかと、スマートフォン・タブレット向けの検索専用モードを設定します。",
			openOnStartup: "起動時に開く",
			openOnStartupDesc: "保管庫の読み込み時にホーム画面を開きます。",
			replaceNewTabs: "新規タブを置き換える",
			replaceNewTabsDesc: "空の新規タブの代わりにホーム画面を表示します。",
			focusSearchOnOpen: "開いたときに検索にフォーカス",
			focusSearchOnOpenDesc:
				"ホーム画面を開くたびに検索フィールドにカーソルを置き、すぐに入力を始められるようにします。" +
				"デスクトップのみです。",
			liveRefresh: "保管庫の変更をリアルタイムに反映",
			liveRefreshDesc:
				"開いているホーム画面を、保管庫の変更に合わせて最新の状態に保ちます。" +
				"最近のファイル、ブックマーク、保存したクエリのカードが、タブを開き直さなくても更新されます。" +
				"この設定に関係なく、Hearthのタブに戻ったときは常に更新されます。",
			liveSettingsSync: "同期された変更を取り込む",
			liveSettingsSyncDesc:
				"別のデバイスで行ったダッシュボードの変更を、次回のObsidianの再起動時ではなく、" +
				"同期で届いた時点で適用します。作業中にダッシュボードが再読み込みされるのが邪魔でなければ、" +
				"オンのままにしてください。",
			deviceLocalState: "表示状態をこのデバイスに保存",
			deviceLocalStateDesc:
				"アクティブなダッシュボードとスクロール位置を、このデバイスだけに記憶します。" +
				"ダッシュボードを切り替えてもdata.jsonが変わらず、スクロールしてもworkspace.jsonが書き換えられません。" +
				"保管庫をGitで同期している場合に便利です。" +
				"その代わり、Obsidianを再起動するとスクロール位置は失われます。",
			legacyTag: "旧機能",
			mobileSearchOnly: "モバイルモード（検索のみ）",
			mobileSearchOnlyDesc:
				"スマートフォンとタブレットでは、ダッシュボードを隠して検索フィールドだけを表示します。" +
				"デスクトップには影響しません。",
			stackOnNarrow: "狭い画面ではカードを縦に並べる",
			stackOnNarrowDesc:
				"ダッシュボードがレイアウトに対して狭すぎるとき（スマートフォンや、デスクトップの狭いペインなど）は、" +
				"カードを全幅の1列で表示します。元のレイアウトは変更されず、十分な幅に戻れば元どおりになります。" +
				"各カードは、それぞれの設定から、この列での非表示・並べ替え・サイズ変更・折りたたみを設定できます。",
			narrowWidth: "狭い画面とみなす幅",
			narrowWidthDesc:
				"ダッシュボードを狭いとみなす幅（ピクセル）です。これより狭いと狭い画面のレイアウトになります。" +
				"値を上げると、画面の半分程度のウィンドウでも狭いレイアウトに切り替わります。" +
				"値を下げると、より狭いペインでも自由配置のレイアウトを保ちます。" +
				"ダッシュボードごとに上書きできます。",
			mobilePerformanceTier: "モバイルでのパフォーマンスレベル",
			mobilePerformanceTierDesc:
				"スマートフォンとタブレットで使うレベルです。モバイルでは、アニメーションする空やすりガラス効果を" +
				"最も小さな画面に描画し、その負荷をバッテリーでまかなうことになります。" +
				"デスクトップのレベルは別に保存され、変更されません。",
			mobileTierMatch: "デスクトップと同じ",
			disableExternalCalls: "外部通信を無効にする",
			disableExternalCallsDesc:
				"Hearthが行う外部へのネットワーク通信をすべてブロックします。Jira、外部カレンダー、" +
				"RSSフィード、電卓の為替レート取得、Webアドレスで指定した背景画像やタイトルアイコンも対象です。" +
				"その場合、背景画像は表示されず、タイトルアイコンはHearthのクリスタルになります。",
			openIn: "ノートを開く場所",
			openInDesc:
				"Hearthからノートを開いたときの開き先です。「現在のタブ」はホーム画面を置き換えるため、" +
				"Hearthがほかのタブと同じように振る舞います。Ctrl/Cmdを押しながらクリックすると、" +
				"この設定に関係なく常に新規タブで開きます。",
			openInModes: {
				tab: "新規タブ",
				same: "現在のタブ（Hearthを置き換え）",
				split: "分割ペイン",
				window: "新規ウィンドウ",
			},
			/** The extra choice each per-source dropdown offers on top of the four
			 * destinations: follow whatever "Open notes in" is set to. */
			openInFollow: "上と同じ",
			openInSources: {
				link: "リンク",
				linkDesc: "ノートやタスク、リンクカードの中のリンクです。",
				search: "検索結果",
				searchDesc: "検索バーと検索カードでヒットしたものです。",
				card: "カード内のノート",
				cardDesc:
					"最近のファイル、ブックマーク、お気に入り、カレンダー、ヒートマップ、タスクの各カードに" +
					"表示されるノートと、モバイルのアクションボタンから開くノートです。",
				newNote: "Hearthが作成するノート",
				newNoteDesc: "作成と同時に開かれる、新規ノート、デイリーノート、予定のノートです。",
			},
			openFromOutside: "Hearth以外から開いたノート",
			openFromOutsideDesc:
				"ファイルエクスプローラ、クイックスイッチャー、グラフ、そしてカードに埋め込まれたもののうち" +
				"自分でリンクを開くものが対象です。Obsidianはこれらをフォーカス中のタブに渡すため、" +
				"Hearthのタブが置き換えられてしまいます。Hearthのタブを残すには「新規タブ」を選んでください。" +
				"ただしその場合、ファイルエクスプローラは開いたファイルに追従しなくなります。",
			openFromOutsideModes: {
				same: "現在のタブ（Hearthを置き換え）",
				tab: "新規タブ（Hearthは開いたまま）",
			},
		},
		mobileActions: {
			heading: "モバイルのアクションバー",
			headingDesc:
				"モバイルモード（検索のみ）では、このボタンの列が検索バー横の「新規ノート」ボタンの代わりになり、" +
				"検索フィールドとフィルターの下に表示されます。各ボタンでは、ランチパッドのタイルと同じように、" +
				"コマンドの実行、ノートやファイルを開く、URLを開くのいずれかを行えます。",
			showActionBar: "アクションバーを表示",
			showActionBarDesc:
				"モバイルモードで、検索フィールドの下にアクションボタンの列を表示します。",
			labelPlaceholder: "ラベル",
			iconPlaceholder: "アイコン",
			commandTooltip: (id: string) => `コマンド: ${id}`,
			pickCommand: "コマンドを選択",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			removeButton: "ボタンを削除",
			addButton: "ボタンを追加",
			resetDefaults: "デフォルトに戻す",
		},
		/** The full catalogue shown at the top of the Integrations tab. Every
		 * integration is listed here whether or not it has a setting and whether
		 * or not the plugin is installed — see `src/integrations.ts`. */
		integrations: {
			heading: "すべての連携",
			headingDesc:
				"Hearthが連携できるものを、インストールの有無にかかわらず一覧にしています。" +
				"ほとんどの連携は設定不要です。設定が必要なものには、その設定の場所を記載しています。",
			groups: {
				plugin: "コミュニティプラグイン",
				pluginDesc: "有効にすると、Hearthが自動的に認識します。",
				core: "Obsidianのコアプラグイン",
				coreDesc:
					"Obsidianに内蔵されています。カードにプラグインが見つからないと表示された場合は、" +
					"設定 → コアプラグインで有効にしてください。",
				service: "外部サービス",
				serviceDesc:
					"ネットワーク経由でデータを取得するカードです。「挙動」→「プライバシーとネットワーク」の" +
					"「外部通信を無効にする」で、すべてまとめて止められます。",
			},
			status: {
				enabled: "有効",
				disabled: "無効",
				missing: "未インストール",
				external: "ネットワーク",
				always: "常に利用可能",
			},
			/** Tooltip on the status pill, spelling out what it means for Hearth. */
			statusTooltip: {
				enabled: "インストール済みで有効です。Hearthが使用しています。",
				disabled: "インストール済みですがオフになっているため、Hearthは現在使用できません。",
				missing: "インストールされていません。Hearthのほかの機能は、これがなくても動作します。",
				external: "プラグインではなく、外部への通信です。",
				always: "インストールは不要です。",
			},
			/** Where this integration's settings live, shown under the description. */
			where: {
				section: "設定はこのタブの下のほうにあります。",
				tab: (tab: string) => `設定は「${tab}」タブにあります。`,
				card: "ダッシュボード上のカード自体で設定します。",
				pluginSettings: "そのプラグイン自身の設定を使います。Hearthで設定する項目はありません。",
				none: "設定する項目はありません。",
			},
			/** Row buttons. */
			install: "インストール",
			installTooltip: "Obsidianのコミュニティプラグインブラウザでこのプラグインを開きます。",
			goToSection: "表示",
			goToTab: "開く",
			/** One entry per id in `INTEGRATIONS`. */
			items: {
				omnisearch: {
					name: "Omnisearch",
					desc:
						"検索バーのエンジンを、Hearth内蔵のものからOmnisearchのあいまい検索・全文インデックスに切り替えます。" +
						"エンジンは「検索」→「検索バー」で選びます。この選択は、Omnisearchが有効な間だけ保持されます。",
				},
				tasknotes: {
					name: "TaskNotes",
					desc:
						"タスクカードで、1タスク1ノート形式のTaskNotesの保管庫を読み込めるようにします。" +
						"ステータス、期限、優先度をフロントマターから直接読み取ります。",
				},
				dataview: {
					name: "Dataview",
					desc:
						"DataviewカードはDQLクエリとDataviewJSブロックを実行し、Dataview自身のレンダラーで表示します。" +
						"Dataviewのインデックスが変わると更新されます。",
				},
				datacore: {
					name: "Datacore",
					desc:
						"Dataviewの後継です。DatacoreカードはDatacoreのクエリ（またはJS/JSX/TS/TSXのスクリプト）を実行し、" +
						"Datacore自身のライブビューで表示します。",
				},
				templater: {
					name: "Templater",
					desc:
						"「テンプレートから新規ノート」カードは、Templaterのテンプレートをボタンにします。" +
						"各タイルにテンプレート、作成先フォルダ、ファイル名のパターンを設定でき、" +
						"ワンクリックでノートを作成します。テンプレートの処理はTemplaterが行うため、" +
						"ユーザースクリプト、tp.system.prompt()のダイアログ、カーソル位置の指定は、" +
						"Templater自身のコマンドから使ったときと同じように動作します。",
				},
				periodicNotes: {
					name: "Periodic Notes",
					desc:
						"定期ノートカードは、今週・今月・今四半期・今年のノートを表示します。" +
						"どのノートかの判定と（あなたのテンプレートからの）作成は、Periodic Notes自身が行います。",
				},
				journals: {
					name: "Journals",
					desc:
						"同じカードはJournalsからも読み込めます。ジャーナルを1つ選ぶと、そのジャーナルの現在のノートを表示します。" +
						"どのノートかの判定と（ジャーナル独自のテンプレートとプロンプトを使った）作成は、" +
						"Journalsプラグイン自身のAPIを通じて行います。",
				},
				git: {
					name: "Git",
					desc:
						"Gitカードは、リポジトリのブランチ、変更、最近のコミットを表示します。" +
						"コミット、同期、プッシュ、プルはGitプラグイン自身を通じて行うため、" +
						"リモート、認証情報、コミットメッセージのテンプレートはそのまま適用されます。",
				},
				operon: {
					name: "Operon",
					desc:
						"Operonのカード（タスク、ボード、アジェンダ、タイマー）は、Operon自身のDeveloper APIを通じて読み込むため、" +
						"ステータス、優先度、繰り返しの定義はOperonに任されます。デスクトップのみで、" +
						"Obsidian 1.12.2以降が必要です。また、OperonでHearthの読み取りリクエストを承認する必要があります。",
				},
				iconic: {
					name: "Iconic",
					desc:
						"Iconicで設定したファイルごとのアイコンが、Hearthがファイルを一覧表示するすべての場所" +
						"（最近のファイル、お気に入り、保存した検索、検索結果）に表示されます。",
				},
				iconize: {
					name: "Iconize",
					desc:
						"Iconize（旧Obsidian Icon Folder）でも同様です。フロントマターのプロパティで設定したアイコンも含みます。",
				},
				frontMatterTitle: {
					name: "Front Matter Title",
					desc:
						"フォルダカードとフォルダブラウザで、ノートをファイル名ではなく、" +
						"Front Matter Titleがファイルエクスプローラに表示するタイトルで一覧表示します。",
				},
				vaultPet: {
					name: "Vault Pet",
					desc:
						"Vault Petカードは、このプラグインをダッシュボード上に置きます。リアルタイムに動いてクリックもできるペットカードか、" +
						"クエスト、図鑑、バッジ、統計がそろったペットハウス全体のどちらかを表示します。" +
						"ペットやそのXP、解除したものはすべてVault Petのもので、Hearthは場所を提供するだけです。",
				},
				excalidraw: {
					name: "Excalidraw",
					desc:
						"埋め込みカードはExcalidrawの図面をライブで表示し、「新規図面」アクションは" +
						"Excalidraw自身のコマンドで図面を作成します。",
				},
				bases: {
					name: "Bases",
					desc: "埋め込みカードで、ベース（.base）のビューをダッシュボードに表示できます。",
				},
				canvas: {
					name: "キャンバス",
					desc: "埋め込みカードで、キャンバスを操作できる状態のまま端から端まで表示できます。",
				},
				dailyNotes: {
					name: "デイリーノート",
					desc:
						"デイリーノート、ミニカレンダー、保管庫の統計の各カードは、デイリーノートプラグインのフォルダ、" +
						"日付の書式、テンプレートの設定から今日のノートを特定します。",
				},
				bookmarks: {
					name: "ブックマーク",
					desc: "ブックマークカードは、Obsidianのブックマークをグループも含めて一覧表示します。",
				},
				globalSearch: {
					name: "検索",
					desc:
						"すべての結果を見たいときに、検索語をObsidian自身の検索ペインに渡します。",
				},
				fileExplorer: {
					name: "ファイルエクスプローラ",
					desc: "Hearthの検索結果にある「ファイルエクスプローラで表示」に使われます。",
				},
				workspaces: {
					name: "ワークスペース",
					desc: "ダッシュボードを開いたときに、保存したワークスペースに切り替えられます。",
				},
				audioRecorder: {
					name: "オーディオレコーダー",
					desc:
						"モバイルの「音声を録音」アクションボタンで、Obsidian自身のレコーダーの録音を開始・停止します。",
				},
				leafViews: {
					name: "サイドパネルを持つプラグイン全般",
					desc:
						"プラグインビューカードは、ほかのプラグインが登録したビュー（カレンダー、カンバンボード、" +
						"アウトライン、タグペインなど）をカードの中に直接表示します。" +
						"インストールされているものはすべて、カードのビュー選択に表示されます。",
				},
				jira: {
					name: "Jira",
					desc:
						"Jiraカードは、カードに入力した認証情報を使って、Jira CloudまたはServerのインスタンスから" +
						"REST API経由で課題を取得します。",
				},
				rss: {
					name: "RSS・Atomフィード",
					desc: "RSSカードは、指定したRSS 2.0またはAtomのフィードを取得して解析します。",
				},
				ics: {
					name: "iCalendarフィード",
					desc:
						"ミニカレンダーカードは、外部のICS/webcalカレンダー（Google、iCloud、Fastmail、Nextcloudなど）を購読できます。",
				},
				currency: {
					name: "為替レート",
					desc:
						"電卓カードは、無料でAPIキー不要のFrankfurter APIから取得したECBのレートで通貨を換算します。",
				},
				markets: {
					name: "マーケットの相場",
					desc: "マーケットカードは、無料でAPIキー不要のソースから相場を取得します。世界の大半の取引所・為替・暗号資産はYahoo Finance、上海・深圳・北京・香港の上場銘柄はTencent、中国の場外ファンドはEastmoney、暗号資産のコインはCoinGecko、通貨ペアはFrankfurter経由のECBです。いずれも公式のAPIではないため、あるソースで取得に失敗すると、カードは別のソースに切り替えます。送信するのは、カードに登録した銘柄のシンボルだけです。",
				},
				weather: {
					name: "天気予報",
					desc:
						"天気カードとリアルタイムの天気の空の背景は、Open-Meteoから気象情報を取得します。" +
						"無料で、APIキーもアカウントも不要です。送信するのは選んだ場所の座標だけで、" +
						"1つの天候に固定した空なら場所の指定も不要です。",
				},
				tension: {
					name: "世界の緊張度",
					desc:
						"世界の緊張度カードは、Kagi NewsのWorld Tension指数（言語モデルがその日の世界のニュースを" +
						"0〜100で評価したもの）をkite.kagi.comから取得します。無料で、APIキーもアカウントも不要です。" +
						"あなたや保管庫に関する情報は何も送信しません。",
				},
				webSearch: {
					name: "Web検索",
					desc:
						"検索バーのボタンで、ノートを作成する代わりに検索語をDuckDuckGoに送れます。" +
						"「検索」→「検索バー」で切り替えます。",
				},
			},
		},
		tasks: {
			heading: "タスク / TaskNotes",
			headingDesc:
				"TaskNotesモードのタスクカードが読み取るフィールド名です。TaskNotesにはほかのプラグイン向けの" +
				"安定したAPIがないため、フロントマターを直接読み取ります。TaskNotes自身の設定で割り当てている" +
				"フィールド名に合わせてください（下のデフォルト値はTaskNotesのデフォルトと同じです）。",
			statusField: "ステータスのフィールド",
			statusFieldDesc: "タスクのステータスとして読み取るフロントマターのフィールドです。",
			dueField: "期限のフィールド",
			dueFieldDesc: "タスクの期限として読み取るフロントマターのフィールドです。",
			priorityField: "優先度のフィールド",
			priorityFieldDesc:
				"タスクの優先度として読み取るフロントマターのフィールドです。",
			doneValue: "「完了」のステータス値",
			doneValueDesc: "TaskNotesのタスクを完了とみなすステータスの値です。",
			fieldsEnable: "タスクのフィールドをカスタマイズ",
			fieldsEnableDesc:
				"タスクカードに表示する固定のメタデータを、自分で定義したフィールドに置き換えます。" +
				"フロントマターの任意のプロパティや、Hearthが読み取る任意の情報を、好きな名前・色・順序で表示できます。" +
				"デフォルトはオフで、オンにするまでタスクはいつもの見た目のままです。" +
				"オンにすると白紙の状態から始まり、追加したフィールドだけが表示されます。",
			fields: "タスクに表示するフィールド",
			fieldsDesc:
				"すべてのタスクカードに表示するフィールドです。個々のカードの設定で、" +
				"そのカード独自のフィールドを定義することもできます。",
		},
		fileIcons: {
			heading: "ファイルアイコン / Iconic / Iconize",
			headingDesc:
				"IconicやIconizeプラグインで設定したファイルごとのアイコンを、Hearthがファイルを表示するすべての場所" +
				"（最近のファイル、お気に入り、保存した検索、検索バー）で使います。" +
				"Lucideアイコンと絵文字が表示されます。ダウンロードしたアイコンパックのアイコンを" +
				"使っているファイルは、Hearth独自のファイル形式アイコンのままです。",
			enable: "Iconic / Iconizeのアイコンを使う",
			enableDesc:
				"オフにすると、両方のプラグインを無視して、すべてのファイルにHearthのファイル形式アイコンを表示します。",
			enableDescNoPlugin:
				"現在IconicもIconizeも有効になっていないため、下のフロントマターのオプションがオンでない限り、" +
				"すべてのファイルにHearthのファイル形式アイコンが表示されます。" +
				"この設定はオンのままで構いません。どちらかがインストールされるとすぐに有効になります。",
			property: "Iconizeのフロントマタープロパティ",
			propertyDesc:
				"Iconizeがノートのアイコンを保存するプロパティです。メニューではなくフロントマターで設定した" +
				"アイコンに使います。カンマ区切りのリストも指定できるので、ほかのプラグインが書き込むプロパティを" +
				"後ろに追加できます。Iconizeの設定で名前を変えている場合は、それに合わせてください" +
				"（デフォルトは「icon」）。",
			frontmatterWithoutPlugin: "アイコンプラグインなしでフロントマターのアイコンを読み込む",
			frontmatterWithoutPluginDesc:
				"IconicもIconizeもインストールされていなくても、ノートのフロントマターで指定されたアイコンを表示します。" +
				"ほかのプラグイン（Notebook Navigator、Pretty Properties、AutoIcon）や自分自身でアイコンを" +
				"書き込んでいる場合に便利です。デフォルトはオフです。「icon」はよくあるプロパティ名なので、" +
				"別の用途で使っている保管庫では、その値がアイコンとして描画されてしまうためです。" +
				"表示されるのは、絵文字とObsidianが認識するアイコンIDだけで、" +
				"それ以外はHearthのファイル形式アイコンのままです。",
		},
		frontMatterTitle: {
			heading: "Front Matter Title",
			headingDesc:
				"Front Matter Titleプラグインがノートにタイトルを付けている場合に、ファイルエクスプローラと同じように" +
				"表示します。フォルダカードとフォルダブラウザで、各ノートをファイル名ではなくそのタイトルで一覧表示します。" +
				"プラグイン自身のエクスプローラの設定に従い、そのエクスプローラ機能がオフの間は" +
				"ファイル名を表示します。",
			enable: "Front Matter Titleのタイトルを使う",
			enableDesc: "オフにすると、プラグインを無視して、すべてのノートをファイル名で一覧表示します。",
			enableDescNoPlugin:
				"現在Front Matter Titleが有効になっていないため、ノートはファイル名で一覧表示されます。" +
				"この設定はオンのままで構いません。プラグインがインストールされるとすぐに有効になります。",
		},
		operon: {
			heading: "Operon",
			headingDesc:
				"Operonプラグイン自身のDeveloper APIを通じて、タスク、ボード、アジェンダ、実行中のタイマーを読み込みます。" +
				"タスクが何であるかは引き続きOperonが決め、HearthはOperonが返したものを表示するだけです。",
			enable: "Operonに接続",
			enableDesc:
				"オフにすると完全に停止します。Operonカードは読み込みをやめ、HearthがOperonにアクセスを求めることも" +
				"ありません。ダッシュボードにOperonカードを置くまでは、何もリクエストしません。",
			status: "接続",
			statusAbsent: "Operonがインストールされていないか、有効になっていません。",
			statusUnsupported:
				"OperonのDeveloper APIはデスクトップ専用で、Obsidian 1.12.2以降が必要です。",
			statusBooting: "Operonは実行中ですが、まだ起動処理中です。",
			statusPending:
				"承認待ちです。設定 → Operon → Core → General → " +
				"Developer API Integrationsを開き、Hearthを承認してください。",
			statusSuspended:
				"アクセスが一時停止されています。OperonのDeveloper API Integrationsで、" +
				"Hearthの保留中のスコープを確認してください。",
			statusRevoked:
				"アクセスが取り消されました。OperonのDeveloper API Integrationsで再度許可してください。",
			statusReady: "接続済みです。Operonカードでタスクを読み込めます。",
			statusIdle: "まだ接続されていません。Operonカードを追加するとセッションを開始します。",
			statusOff: "連携がオフになっているため、HearthはOperonから何も読み込んでいません。",
			statusError: "Operonが接続を拒否しました。",
			detail: "Operonからの報告",
			install: "コミュニティプラグインでOperonを開く",
			writes: "変更を許可",
			writesDesc:
				"ボードカードでタスクをドラッグして別のステータスに移動したり、「+」でタスクを作成したりできるようにします。" +
				"新しいタスクの作成先や、その移動が可能かどうかはOperonが判断し、Hearthは依頼するだけです。" +
				"オンにするとHearthが要求する権限が広がるため、OperonのDeveloper API Integrationsで" +
				"再度承認する必要があります。オフの場合、Hearthは読み取りのみ行います。",
			writesPending:
				"読み取りはできますが、変更の権限がまだ許可されていません。" +
				"OperonのDeveloper API IntegrationsでHearthを再度承認してください。それまでは、" +
				"カードは読み取り専用のままです。",
			capabilities: "要求するアクセス権",
			capabilitiesDesc:
				"Operonは一部だけ承認されたセッションを開かないため、Hearthはこれらすべてを一度に要求します。" +
				"「変更を許可」がオンでなければ読み取り専用です。オンにすると、" +
				"タスクのステータス移行とタスク作成の権限が追加されます。",
			missing: (names: string) => `まだ許可されていない権限: ${names}`,
			recheck: "再確認",
			recheckDesc:
				"Operonで承認・取り消し・再読み込みを行った後に、接続し直します。",
			recheckAction: "今すぐ再確認",
		},
		filters: {
			heading: "検索フィルター",
			headingDesc:
				"フィルターは保管庫内のファイル形式から自動で検出されます。不要なものは非表示にしてください。",
		},
		dashboard: {
			heading: "ダッシュボード",
			headingDesc:
				"カードグリッドのサイズと透明度を設定します。カード自体の追加と設定は、ダッシュボード上で行います。",
			fitToPage: "ページに合わせる",
			fitToPageDesc:
				"スクロールさせずに、ダッシュボードを1画面に収めます。",
			compact: "間隔を詰める",
			compactDesc:
				"カードの余白と上部のマージンを詰めて、使える領域を広げます。",
			arrangeButtonVisibility: "配置ボタンの表示",
			arrangeButtonVisibilityDesc:
				"配置/編集ボタンを常に表示するか、その領域にカーソルを合わせたときだけ表示するかを選びます。",
			dashboardSwitcherVisibility: "ダッシュボード切り替えボタンの表示",
			dashboardSwitcherVisibilityDesc:
				"左上のダッシュボードボタンを常に表示するか、その領域にカーソルを合わせたときだけ表示するかを選びます。",
			visibilityOptions: {
				always: "常に表示",
				hover: "ホバー時に表示",
			},
			cardOpacity: "カードの不透明度",
			cardOpacityDesc:
				"カードの背景を透過させ、ダッシュボードの背景が透けて見えるようにします。",
			cardBlur: "カードのぼかし",
			cardBlurDesc:
				"半透明のカードの背後にかける、すりガラス風のぼかしです。効果を出すには、カードの不透明度を100%未満にする必要があります。0でオフです。",
			cardRadius: "カードの角の丸み",
			cardRadiusDesc:
				"カードの角の丸み（ピクセル）です。デフォルトは14で、小さくするほど角がとがります。",
			cardBorderWidth: "カードの枠線",
			cardBorderWidthDesc:
				"カードの枠線と、ヘッダーの区切り線の太さ（ピクセル）です。0にすると枠線を表示しません。",
			cardSurfaceExpressive:
				"エクスプレッシブのカードは、角が大きく丸い、不透明なトーンの背景に載るため、不透明度・ぼかし・角の丸み・枠線はクラシックのカードにのみ適用されます。",
			cardDesign: "デザイン",
			cardDesignDesc:
				"Hearthの描画スタイルです。クラシックか、Material 3 Expressive（アクセントカラーのトーンを使ったコンテナ、ピル型や柔らかな形、太めの文字）を選びます。エクスプレッシブはHearthのインターフェース全体に適用されます。カード、ダッシュボードのボタン、すべてのダイアログとメニュー、そしてこの設定画面も対象です。ダッシュボードやカードごとに個別に選ぶこともできます。中身がユーザー自身のもの（ノート、埋め込み、Webページ）であるカードは、その中身はそのままで、エクスプレッシブの枠だけが適用されます。",
			designClassicDesc: "落ち着いた質感と細い枠線。これまでどおりのHearthの見た目です。",
			designExpressiveDesc: "すべてをMaterial 3 Expressiveで表示します。アクセントカラーを元にしたトーンの色、ピル型や柔らかな形、太めの文字が特徴です。",
			designInUse: "使用中",
			cards: "カード",
			cardsDesc:
				"カードの追加と設定は、ダッシュボード上で行います。ホーム画面を開いて「配置」を押し、" +
				"「カードを追加」「ダッシュボードの設定」や、各カードの設定ボタンを使ってください。",
		},
		layout: {
			heading: "インポート / エクスポート",
			headingDesc:
				"ダッシュボード1つの共有や、設定全体のバックアップをJSONファイルで行います。",
			exportDashboard: "このダッシュボードをエクスポート",
			exportDashboardDesc:
				"表示中のダッシュボードを、ほかの人がインポートできるファイルとして保存します。見た目に関する設定はすべて含まれ、壁紙を含めるかどうかも選べます。",
			exportDashboardButton: "ダッシュボードをエクスポート…",
			importAny: "インポート",
			importAnyDesc:
				"Hearthのファイル（ダッシュボード1つ、レイアウト、または完全なバックアップ）を開きます。何かが変更される前に中身を確認でき、ダッシュボード1つの場合は、既存のものを置き換えずに追加されます。",
			export: "レイアウトをエクスポート",
			exportDesc:
				"すべてのダッシュボードと、グリッド・レイアウトの設定をJSONファイルとしてダウンロードします。",
			exportButton: "ファイルをエクスポート",
			exportMobileTooltip:
				"モバイルでは、ファイルは保管庫のルートフォルダに保存されます。",
			importButton: "ファイルをインポート",
			exportSettings: "設定をエクスポート",
			exportSettingsDesc:
				"Hearthのすべての設定（レイアウト全体に加え、ヘッダー、背景、挙動、外観、" +
				"TaskNotesのオプション）を、JSONのバックアップファイルとしてダウンロードします。",
		},
	},

	// ---- Card settings editor ------------------------------------------
	editors: {
		title: "カードの設定",
		/** Shown as the tooltip on tile icon fields (launchpad, templater). */
		iconHelp:
			"LucideのアイコンID（例：「home」「star」「calendar」）を入力します。一覧は" +
			"lucide.dev/iconsで確認できます。保管庫内の画像のパス（例：" +
			"Attachments/icon.png）を入力すると、自分の画像をアイコンとして使えます。",
		/** Tabs across the top of the card settings modal. */
		tabs: {
			content: "内容",
			style: "スタイル",
			layout: "レイアウト",
		},
		type: "種類",
		typeDesc: "このカードに表示する内容です。",
		cardTitle: "タイトル",
		cardTitleDesc:
			"カードのヘッダーに表示されます。空欄にすると、ヘッダーのないカードになります。",
		cardTitlePlaceholder: "タイトル",
		mobile: {
			heading: "幅の狭いダッシュボードでの表示",
			hidden: "非表示にする",
			hiddenDesc:
				"ダッシュボードが1列に積み重なるときは、このカードを表示しません。幅がないと意味をなさないカード（横に広い表やダッシュボードビューなど）は、押し縮めるより隠したほうが見やすくなります。",
			collapsed: "最初は折りたたむ",
			collapsedDesc:
				"カードのタイトル行だけを表示し、タップして開いたときに初めて中身を読み込みます。開かれないカードは1行分の場所を取るだけで、何も処理しません。",
			height: "高さ",
			heightDesc:
				"積み重ねたときの高さ（ピクセル）です。空欄にするとカード自身の高さを保ちますが、縦に長いカードが1枚で画面を埋めないよう上限があります。",
			order: "順番",
			orderDesc:
				"積み重ねたときにこのカードが何番目に来るかを、0から数えて指定します。空欄にすると、ダッシュボードを上から下、左から右へ読んだ順に並びます。",
			autoPlaceholder: "自動",
		},
		resetSize: "デフォルトのサイズに戻す",
		removeCard: "カードを削除",
		removeCardTitle: "カードを削除しますか？",
		removeCardMessage: (name: string) => `「${name}」をダッシュボードから削除しますか？`,
		removeCardConfirm: "削除",
		thisCard: "このカード",
		done: "完了",
		kinds: {
			embed: "埋め込み（ノート / 画像 / ベース）",
			slideshow: "スライドショー",
			daily: "デイリーノート（今日）",
			periodic: "定期ノート / ジャーナル",
			web: "Webページ（iframe）",
			bookmarks: "ブックマーク",
			favorites: "お気に入り",
			text: "テキスト / メモ",
			recent: "最近のファイル",
			folder: "フォルダの中身",
			links: "リンク / ランチパッド",
			templater: "テンプレートから新規ノート",
			clock: "時計とあいさつ",
			tasks: "タスク",
			calendar: "ミニカレンダー",
			schedule: "カレンダー",
			stats: "保管庫の統計",
			search: "検索クエリ",
			searchbar: "検索バー",
			heatmap: "アクティビティヒートマップ",
			calculator: "電卓",
			dataview: "Dataviewクエリ",
			datacore: "Datacoreクエリ",
			rss: "RSSフィード",
			jira: "Jiraフィルター",
			weather: "天気",
			market: "マーケット",
			tension: "世界の緊張度",
			git: "Git",
			operon: "Operon",
			leaf: "プラグインビュー（ベータ）",
			pet: "ペット",
			vaultpet: "Vault Pet",
		},
		linkTypes: {
			note: "ノート",
			url: "URL",
			command: "コマンド",
		},
		embed: {
		section: "セクション",
		sectionDesc:
			"ノートの一部だけを表示します。見出し（その下の内容すべてを含む）か、1つのブロックを指定します。空欄にするとノート全体を表示します。",
		sectionPlaceholder: "#見出し または #^block-id",
		sectionPick: "見出しかブロックを選択",
		sectionPickerPlaceholder: "このノートの見出しかブロックを選択",
		sectionMissing: (section: string) =>
			`このノートには「${section}」がありません。別の見出しかブロックを選んでください。`,
		sectionHeading: "セクションの見出しを表示",
		sectionHeadingDesc:
			"セクション自体の見出しをカード内に表示します。カードのタイトルで内容が分かる場合はオフにしてください。",
		sectionReadOnly:
			"セクションは読み取り専用で表示されます（チェックボックスはノートに反映されます）。カード内でノートを編集するには、セクションを空欄にしてください。",
			file: "埋め込むファイル",
			fileDesc: "保管庫内のノート、画像、キャンバス、または.baseファイルです。",
			filePlaceholder: "埋め込むファイルのパス",
			pickFile: "ファイルを選択",
			baseView: "ベースのビュー",
			baseViewDesc: "この.baseファイルのビューを選ぶか、デフォルトのビューを使います。",
			baseViewDefault: "デフォルトのビュー",
			baseViewFileMissing: "選択した.baseファイルが見つかりません。",
			baseViewLoadError: ".baseファイルのビューを読み込めませんでした。デフォルトのビューを使います。",
			baseViewNoViews: "この.baseファイルには名前付きのビューがありません。デフォルトのビューを使います。",
			baseViewUnsupported: (count: number) =>
				`対応していないウィキリンク文字を含む${count}件のビューを非表示にしました。`,
			zoom: "ズーム",
			zoomDesc:
				"埋め込んだ内容を拡大・縮小します。このダイアログを閉じると反映されます。",
			zoomImageDesc:
				"枠に合わせた画像を、その枠の中で拡大・縮小します。切り抜かれた" +
				"画像をズームすると、さらに切り抜かれます。このダイアログを閉じると反映されます。",
			imageFit: "画像の収め方",
			imageFitDesc:
				"画像をカードにどう収めるかを選びます。最初のモード以外では、" +
				"カード全体を端から端まで画像に使います。",
			imageFits: {
				natural: "元のサイズ",
				contain: "画像全体を収める",
				cover: "カードを埋める（切り抜き）",
				stretch: "カードに合わせて引き伸ばす",
				width: "幅に合わせる（スクロール）",
			},
			imagePosition: "画像の位置",
			imagePositionDesc: "カード内で画像を置く位置です。",
			imagePositionCropDesc: "切り抜くときに、画像のどの部分を残すかを選びます。",
			imagePositions: {
				"top-left": "左上",
				top: "上",
				"top-right": "右上",
				left: "左",
				center: "中央",
				right: "右",
				"bottom-left": "左下",
				bottom: "下",
				"bottom-right": "右下",
			},
			editable: "編集可能",
			editableDesc:
				"埋め込んだノートのテキストをその場で編集します（Markdownノートのみ）。",
			livePreview: "ライブプレビュー",
			livePreviewDesc:
				"シンプルなMarkdown入力欄ではなく、Obsidianのライブプレビューエディタで" +
				"編集します。入力しながら書式が反映されます。オフにすると" +
				"Markdownのソースをそのまま表示し、ダブルクリックで編集します。",
			hideBaseHeader: "ベースのヘッダーを隠す",
			hideBaseHeaderDesc:
				"埋め込んだ.baseファイルで、ベースのビュー自体のツールバー（ビューの切り替え、フィルターやプロパティの操作）を隠し、結果だけを表示します。",
			openButton: "開くボタン",
			openButtonDesc:
				"埋め込んだファイルを専用のタブで開くボタンを表示します。デフォルトはオフです。",
		},
		slideshow: {
			source: "画像の取得元",
			sourceDesc:
				"1枚ずつ選んだ画像のリストか、フォルダ内のすべての画像です。",
			sourceList: "画像のリスト",
			sourceFolder: "フォルダ",
			picturesHeading: "画像",
			picturesEmpty: "まだ画像がありません。下から追加してください。",
			picturePlaceholder: "画像のパス",
			captionPlaceholder: "キャプション（任意）",
			pickPicture: "画像を選択",
			addPicture: "画像を追加",
			addFolderPictures: "フォルダの画像を追加",
			removePicture: "画像をリストから外す",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			folder: "フォルダ",
			folderDesc: "このフォルダ内のすべての画像を表示します。空欄にすると保管庫のルートになります。",
			folderPlaceholder: "Attachments/Photos",
			pickFolder: "フォルダを選択",
			includeSubfolders: "サブフォルダを含める",
			includeSubfoldersDesc: "このフォルダのサブフォルダ内の画像も表示します。",
			folderCount: (count: number) =>
				`現在、ここには${count}枚の画像があります。`,
			playbackHeading: "再生",
			order: "順序",
			orderDesc: "画像を表示する順序です。",
			orders: {
				manual: "リストの順",
				name: "名前（A → Z）",
				nameDesc: "名前（Z → A）",
				created: "作成日時（古い順）",
				createdDesc: "作成日時（新しい順）",
				modified: "更新日時（古い順）",
				modifiedDesc: "更新日時（新しい順）",
				random: "ランダム",
			},
			advance: "画像の切り替え",
			advanceDesc:
				"カードを次の画像へ進める方法です。タイマー、日付、または操作ボタンのみから選びます。" +
				"「1日1回」のカードは今日の日付から画像を決めるので、ダッシュボードが何度" +
				"再描画されても1日中同じ画像のままです。また「1日1回」と「手動のみ」の" +
				"カードは、最後に表示していた位置を覚えています。",
			advances: {
				timer: "タイマーで",
				daily: "1日1回",
				manual: "手動のみ",
			},
			interval: "1枚あたりの秒数",
			intervalDesc:
				"各画像を表示する時間です。0にすると最初の画像のまま切り替えを" +
				"止めます。低電力モードでも一時停止します。",
			intervalAria: "各画像を表示する秒数",
			days: "1枚あたりの日数",
			daysDesc:
				"次の画像に切り替わるまで、各画像を何日表示するかです。" +
				"1なら毎日0時に切り替わり、7なら週替わりの画像になります。",
			daysAria: "各画像を表示する日数",
			transition: "切り替え効果",
			transitionDesc: "次の画像への切り替わり方です。",
			transitions: {
				none: "カット（アニメーションなし）",
				fade: "クロスフェード",
				slide: "スライド",
				zoom: "ズーム",
			},
			transitionSpeed: "切り替えの長さ",
			transitionSpeedDesc: "切り替えにかかる時間（ミリ秒）です。",
			kenBurns: "ゆっくりズーム",
			kenBurnsDesc:
				"表示中の各画像に、ゆっくりズームインしていきます（「ケン・バーンズ」効果）。",
			displayHeading: "表示",
			fit: "収め方",
			fitDesc: "各画像をカードにどう収めるかです。",
			fits: {
				cover: "カードを埋める（切り抜き）",
				contain: "画像全体を収める",
			},
			controls: "操作ボタン",
			controlsDesc:
				"ポインターを重ねたときに、前へ / 一時停止 / 次へボタンと現在の位置を表示します。デフォルトはオンです。",
			caption: "キャプション",
			captionDesc:
				"各画像の上にキャプションを表示します。キャプションがなければファイル名を表示します。",
			pauseOnHover: "ポインターを重ねたら一時停止",
			pauseOnHoverDesc: "ポインターがカード上にある間は、今の画像のまま止めます。",
			openButton: "開くボタン",
			openButtonDesc:
				"表示中の画像を専用のタブで開くボタンを表示します。デフォルトはオフです。",
		},
		daily: {
			editable: "編集可能",
			editableDesc:
				"今日のノートを読み取り専用ではなく、その場で編集します。保管庫に保存されます。",
			openButton: "開くボタン",
			openButtonDesc: "今日のノートをエディタで開くボタンを表示します。",
			info: "デイリーノート",
			infoDesc:
				"今日のノートは、コアプラグイン「デイリーノート」の日付の書式とフォルダから決まります。編集すると、カードもその場で更新されます。",
		},
		periodic: {
			source: "取得元",
			sourceDesc: "このカードがノートを取得するプラグインです。",
			sources: {
				periodicNotes: "Periodic Notes",
				journals: "Journals",
			},
			journal: "ジャーナル",
			journalDesc:
				"このカードで表示するジャーナルです。常にそのジャーナルの" +
				"現在のノートを表示するので、期間が終わるとカードも自動で次へ進みます。",
			chooseJournal: "ジャーナルを選択",
			noJournals: "ジャーナルがまだありません",
			granularity: "期間",
			granularityDesc:
				"このカードで表示する定期ノートの種類です。常に現在のノートを表示するので、" +
				"期間が終わるとカードも自動で次へ進みます。",
			granularities: {
				day: "デイリー",
				week: "ウィークリー",
				month: "マンスリー",
				quarter: "クォータリー",
				year: "イヤリー",
			},
			editable: "編集可能",
			editableDesc:
				"ノートを読み取り専用ではなく、その場で編集します。保管庫に保存されます。",
			openButton: "開くボタン",
			openButtonDesc: "ノートをエディタで開くボタンを表示します。",
			info: "Periodic Notes",
			infoDesc:
				"ノートはPeriodic Notesプラグイン自身のフォルダ、日付の書式、" +
				"テンプレートから決まり、まだないノートはPeriodic Notes自身が" +
				"作成します。編集すると、カードもその場で更新されます。",
			missingDesc:
				"このカードにはコミュニティプラグインのPeriodic Notesが必要です。インストールして有効にしてから、" +
				"ここで使いたいノートの種類をオンにしてください。",
			journalsInfo: "Journals",
			journalsInfoDesc:
				"ノートはジャーナル自身のフォルダ、名前のテンプレート、" +
				"ノートのテンプレートから決まり、まだないノートはJournals自身が" +
				"作成します（プロンプトも含めて）。編集すると、カードもその場で更新されます。",
			journalsMissingDesc:
				"このカードにはコミュニティプラグインのJournalsが必要です。インストールして有効にしてから、" +
				"ここで表示するジャーナルを作成してください。",
		},
		web: {
			url: "URL",
			urlPlaceholder: "https://example.com",
			trusted: "信頼済みサイト",
			trustedDesc:
				"ページに同一オリジンのアクセス（Cookie、ストレージ）を許可します。" +
				"iframeのサンドボックスが緩くなるため、信頼できるサイトでのみ有効にしてください。",
			autoRefresh: "自動更新",
			autoRefreshDesc:
				"変更を反映するため、このカードをN秒ごとに再描画します。0でオフになります。",
			refreshIntervalAria: "更新間隔（秒）",
		},
		recent: {
			display: "表示形式",
			displayDesc: "コンパクトな行のリストか、名前の上にアイコンを置いたタイルのグリッドです。",
			displayList: "リスト",
			displayTiles: "タイル",
			titleAdvanced: "詳細設定",
			titleAdvancedDesc:
				"ファイル名の代わりに、フロントマターのプロパティ（エイリアスや、" +
				"保管庫でタイトル用に使っているプロパティ）でノートの名前を表示します。" +
				"そのプロパティがないノートはファイル名のままです。オフにするとファイル名を表示します。",
			titleProperty: "タイトルに使うプロパティ",
			titlePropertyDesc:
				"このプロパティの、空でない最初の値をノートの名前にします。プロパティ名の" +
				"大文字・小文字は区別しません。このプロパティがないノートはファイル名で表示されます。",
			titlePropertyPlaceholder: "aliases",
			fit: "カードの高さに合わせる",
			fitDesc:
				"決まった件数ではなく、カードの高さに収まるだけファイルを表示します。" +
				"カードのサイズを変えると表示件数も変わります。",
			count: "ファイル数",
			countDesc: (max: number) =>
				`最近開いたファイルを何件表示するかです。最大${max}件で、これは` +
				`Hearthが記録している最近のファイル履歴の上限です。`,
			types: "ファイルの種類",
			typesDesc: "選択した種類のファイルだけを表示します。自由に組み合わせて選べます。何も選ばなければ、すべての種類を表示します。",
		},
		folder: {
			folder: "フォルダ",
			folderDesc: "このカードで表示するフォルダです。空欄にすると保管庫のルートになります。",
			folderPlaceholder: "Projects/2026",
			pickFolder: "フォルダを選択",
			sort: "並び順",
			sortDesc:
				"中身の並べ方です。Hearth独自の並び順では、ファイルエクスプローラーと同じように" +
				"フォルダが先頭に来て、名前順に並びます。",
			sorts: {
				explorer: "ファイルエクスプローラーと同じ",
				name: "名前（A–Z）",
				nameDesc: "名前（Z–A）",
				modified: "更新日時（新しい順）",
				modifiedAsc: "更新日時（古い順）",
				created: "作成日時（新しい順）",
				createdAsc: "作成日時（古い順）",
			},
			show: "表示する項目",
			showDesc: "フォルダの中身のうち、カードに表示するものです。",
			showAll: "フォルダとファイル",
			showFolders: "フォルダのみ",
			showFiles: "ファイルのみ",
			display: "表示形式",
			displayDesc: "行のリストか、アイコンタイルのグリッドです。",
			displayList: "リスト",
			displayTiles: "タイル",
			count: "表示する件数",
			countDesc:
				"カードに表示する件数です。これを超えると残りの件数を表示します。" +
				"カードから開くフォルダブラウザには上限はありません。",
			counts: "サブフォルダの項目数",
			countsDesc: "各サブフォルダに入っている項目の数を表示します。",
			navigate: "サブフォルダの開き方",
			navigateDesc:
				"ダイアログで開くか、カード内で開くかを選びます。カード内の場合は、パスの行と" +
				"上の階層へ戻るボタンが加わり、最後に開いていた場所を覚えています。",
			navigateModal: "フォルダブラウザで開く",
			navigateCard: "カード内で開く",
			browse: "カードからフォルダブラウザを開く",
			browseDesc:
				"カードの空いている部分（またはフォルダボタン）をクリックすると、" +
				"パンくずリスト付きのフォルダブラウザでフォルダを開きます。" +
				"ブラウザ内では、どのフォルダにも入っていけます。",
			browseIn: "フォルダブラウザの開き方",
			browseInDesc:
				"ダッシュボードの上に重なるダイアログ（タブへ移すボタン付き）か、" +
				"フォルダをページ全体に表示する専用のタブで開きます。",
			browseInModal: "ダイアログで開く",
			browseInTab: "新規タブで開く",
			browserView: "フォルダブラウザのレイアウト",
			browserViewDesc:
				"フォルダブラウザでフォルダをどう表示するかです（カードとは別に設定します）。行の" +
				"リストか、各ノートのプレビュー付きの大きなタイルです。",
			preview: "ノートのプレビュー",
			previewDesc: "各ノートのタイルに、本文の最初の数行を表示します（プロパティは除きます）。",
			previewSize: "プレビューの文字サイズ",
			previewSizeDesc: "ピクセル単位です。デフォルトは小さめで、ノートを見分けられる程度です。",
			images: "画像のプレビュー",
			imagesDesc:
				"画像ファイルはタイルに画像そのものを表示し、ノートは最初に" +
				"埋め込まれた画像をカバーとして表示します。パフォーマンスレベルが「フル」のときだけ有効です。" +
				"画像を表示するにはファイル全体のデコードが必要で、軽いレベルはそれを避けるためのものだからです。",
		},
		calendar: {
			view: "レイアウト",
			viewDesc: "月表示はグリッドで、アジェンダは今後の日を一覧で表示します。",
			viewMonth: "月のグリッド",
			viewAgenda: "アジェンダ",
			agendaDays: "表示する日数",
			agendaDaysDesc: "アジェンダに、今日から何日分を表示するかです。",
			weekNumbers: "週番号",
			weekNumbersDesc: "左端にISO週番号の列を表示します。",
			heatmap: "ヒートマップ",
			heatmapDesc: "その日のノート作成・更新の量で各日に色を付けます。",
			heatmapCounts: "ヒートマップの集計対象",
			externalCalendars: "外部カレンダー",
			externalCalendarsDesc:
				"ICS/iCalフィード（Google、iCloud、Fastmail、Nextcloud…）を購読します。予定はグリッド上に色付きの点で表示され、アジェンダ表示では一覧になります。",
			operonTasks: "Operonのタスクを表示",
			operonTasksDesc:
				"Operonのタスクの期限がある日に印を付け、そのタスクを" +
				"アジェンダに一覧表示します。Operonの開発者APIを通じて読み込むため、" +
				"設定 → Hearth → 連携でOperonを承認しておく必要があります。" +
				"予定日だけ（期限なし）のタスクは含まれません。",
			operonTaskColor: "Operonタスクの色",
			operonTaskColorDesc: "タスクの印の色です。デフォルトはアクセントカラーです。",
			sourceNamePlaceholder: "名前",
			sourceUrlPlaceholder: "ICS/iCalのURL（https:// または webcal://）",
			sourceShow: "このカレンダーを表示",
			sourceHide: "このカレンダーを非表示",
			sourceRemove: "カレンダーを削除",
			addCalendar: "カレンダーを追加",
			refresh: "更新間隔",
			refreshDesc: "カレンダーを再取得する間隔（分）です。0にすると、開いたときだけ取得します。",
			eventNoteHeading: "予定のノート",
			eventNoteDesc:
				"予定のポップアップにある「ノートを作成」で作られるノートです。ObsidianのWeb Clipperのテンプレートと同じしくみで、名前、フォルダ、型付きのプロパティ、本文のそれぞれに{{variables}}（変数）とフィルターを使えます。",
			eventNoteEnabled: "「ノートを作成」を表示",
			eventNoteEnabledDesc: "予定の詳細ポップアップに、ノートを作成するボタンを表示します。",
			chipsHeading: "項目に表示する情報",
			chipsDesc:
				"アジェンダの各項目で、タイトルの横に何を表示するかを選びます。不要なものはオフにしてください。幅の狭いカードでは、マーカーがタイトルと場所を取り合います。",
			chipTime: "時刻",
			chipTimeDesc: "開始時刻、または「終日」を表示します。",
			chipSource: "カレンダー名",
			chipSourceDesc: "項目がどのカレンダーのものかを表示します。取得元が2つ以上あるときだけ表示されます。",
			chipStatus: "ステータス",
			chipStatusDesc: "タスクのTaskNotesでのステータス（例：「進行中」）です。デフォルトはオフです。",
			chipPriority: "優先度",
			chipPriorityDesc: "タスクのTaskNotesでの優先度（例：「高」）です。",
			chipDue: "期限マーカー",
			chipDueDesc: "期限の項目に付く「期限」バッジです。",
			chipRecurring: "繰り返しマーカー",
			chipRecurringDesc: "繰り返しタスクに付く「繰り返し」バッジです。",
			chipTimeblock: "タイムブロックマーカー",
			chipTimeblockDesc: "タイムブロックに付く「タイムブロック」バッジです。",
			checkboxHeading: "チェックボックスタスク",
			checkboxDesc:
				"Markdownのチェックボックスタスク（- [ ] …）を、Tasks形式で書かれた日付（📅 期限、⏳ 予定日）に従ってカレンダーに表示します。日付のないタスクは表示されません。",
			checkboxEnabled: "チェックボックスタスクを使う",
			checkboxEnabledDesc: "ノートから、日付付きのチェックボックスタスクを読み込みます。",
			checkboxScheduled: "予定日",
			checkboxScheduledDesc: "タスクを⏳予定日に表示します。",
			checkboxDue: "期限",
			checkboxDueDesc: "タスクを📅期限の日に表示します。",
			checkboxCompletedDesc: "完了したタスクも、取り消し線付きでカレンダーに残します。",
			checkboxCompleteDesc: "各タスクにチェックボックスを表示し、ノート内のタスクを完了にできるようにします。",
			checkboxFolders: "フォルダ",
			checkboxFoldersDesc: "これらのフォルダ内のノートだけを読み込みます（カンマ区切り）。空欄なら保管庫全体を読み込みます。",
			checkboxColor: "色",
			checkboxColorDesc: "チェックボックスタスクの項目の色です。",
			taskNotesHeading: "TaskNotes",
			taskNotesDesc:
				"TaskNotesを予定の取得元として使います。カードには、TaskNotes自身のカレンダーと同じ内容（予定日のあるタスク、期限、繰り返しの各回、タイムブロック、TaskNotes内で購読しているカレンダー）を、TaskNotesのフィールド名・ステータス・色のまま表示します。",
			taskNotesMissing:
				"この保管庫ではTaskNotesが有効になっていません。カレンダーの取得元として使うには、インストールして有効にしてください。",
			taskNotesEnabled: "TaskNotesを使う",
			taskNotesEnabledDesc: "TaskNotesの項目をこのカレンダーに表示します。",
			taskNotesScheduled: "予定日のあるタスク",
			taskNotesScheduledDesc:
				"タスクを予定日に、見積もり時間に応じた大きさで表示します。",
			taskNotesDue: "期限",
			taskNotesDueDesc: "タスクを期限の日に表示します。",
			taskNotesRecurring: "繰り返しタスク",
			taskNotesRecurringDesc:
				"繰り返しタスクを、1回ごとに1件ずつ展開して表示します。オフにすると次の日付だけを表示します。",
			taskNotesTimeblocks: "タイムブロック",
			taskNotesTimeblocksDesc: "デイリーノートに書かれたタイムブロックを表示します。",
			taskNotesFollows: (on: boolean) =>
				`現在、TaskNotesではこの設定は${on ? "オン" : "オフ"}です。`,
			taskNotesFollowReset: "TaskNotesの設定に合わせる",
			taskNotesCompleted: "完了済みを表示",
			taskNotesCompletedDesc: "完了したタスクも、取り消し線付きでカレンダーに残します。",
			taskNotesArchived: "アーカイブ済みを表示",
			taskNotesArchivedDesc: "TaskNotesのアーカイブタグが付いたタスクも含めます。",
			taskNotesComplete: "カレンダーから完了にする",
			taskNotesCompleteDesc:
				"各タスクに完了用のチェックボックスを表示します。書き込む内容はTaskNotes自身とまったく同じです（繰り返しタスクは1回ごと）。",
			taskNotesSubscriptions: "TaskNotesのカレンダー",
			taskNotesSubscriptionsDesc: (count: number) =>
				`TaskNotes内で購読している${count}件のカレンダーも表示します。`,
			taskNotesSubscriptionsNone: "TaskNotesには、表示できるカレンダーの購読がありません。",
			taskNotesSubLoaded: (count: number) =>
				`${count}件の予定を読み込みました。`,
			taskNotesSubPending: "まだ読み込まれていません。下のボタンで更新してください。",
			taskNotesSubDisabled: "TaskNotesで無効になっています。",
			taskNotesSubBlocked: "取得していません。Hearthの設定で外部への通信が無効になっています。",
			taskNotesSubFailed: (reason: string) => `読み込めませんでした：${reason}`,
			taskNotesSubNotCalendar: "応答がiCalendarフィードではありませんでした。",
			taskNotesSubMissingFile: "そのファイルは保管庫にありません。",
			taskNotesSubRefresh: "カレンダーを更新",
			taskNotesColorBy: "色の決め方",
			taskNotesColorByDesc: "各タスクの色を何に基づいて決めるかです。",
			taskNotesColorStatus: "TaskNotesのステータス",
			taskNotesColorPriority: "TaskNotesの優先度",
			taskNotesColorFixed: "固定の1色",
			taskNotesColor: "タスクの色",
			taskNotesColorDesc: "固定の色として使うほか、TaskNotesで色が定義されていない場合にも使います。",
			taskNotesDueColor: "期限の色",
			taskNotesDueColorDesc: "期限の項目に別の色を付けたい場合に指定します（任意）。",
			taskNotesTimeblockColor: "タイムブロックの色",
			taskNotesTimeblockColorDesc: "独自の色を持たないタイムブロックに使います。",
		},
		schedule: {
			view: "最初に開くビュー",
			viewDesc:
				"ダッシュボードを開いたときにカードが表示するビューです。カード上でいつでもビューを切り替えられます。",
			views: "切り替え可能なビュー",
			viewsDesc:
				"カードのビュー切り替えに並べるビューです。4つすべてをオンにすると、どのビューにもワンクリックで移れます。1つだけにすると、切り替えボタン自体が表示されなくなります。",
			toolbar: "ツールバー",
			toolbarDesc:
				"ナビゲーション行（戻る、今日、進む、表示中の期間、ビュー切り替え）を表示します。オフにすると、カードは現在の期間に固定されます。",
			dailyNotes: "デイリーノート",
			dailyNotesDesc:
				"デイリーノートがすでにある日に印を付け、日をクリックするとそのノートを開きます（なければ作成を提案します）。オフにすると、予定専用のカレンダーになります。",
			weekHeading: "週",
			firstDay: "週の始まり",
			firstDayDesc: "月と週のグリッドを、何曜日から始めるかです。",
			firstDayLocale: (day: string) => `Obsidianの言語に合わせる（${day}）`,
			hideWeekends: "週末を隠す",
			hideWeekendsDesc: "月と週のグリッドから、土曜日と日曜日を外します。",
			weekNumbers: "週番号",
			weekNumbersDesc: "左端に週番号の列を表示します。",
			clock: "時刻の表記",
			clockDesc: "予定の時刻をどう表記するかです。",
			clockLocale: "Obsidianの言語に合わせる",
			clock12: "12時間制（9:00 AM）",
			clock24: "24時間制（09:00）",
			monthHeading: "月表示",
			monthStyle: "予定の表示方法",
			monthStyleDesc:
				"名前付きのチップは、広いカードで一目で読めます。点は小さなカード向けで、ミニカレンダーと同じ表示です。",
			monthStyleChips: "名前付きのチップ",
			monthStyleDots: "ドット",
			maxPerDay: "1日あたりの予定数",
			maxPerDayDesc:
				"日のマスに何件まで予定を表示し、残りを「+N件」のリンクにまとめるかです。0にするとすべて表示し、マス内をスクロールできるようにします。",
			gridHeading: "週・日表示",
			gridDesc:
				"時間グリッドはデフォルトで1日全体を表示し、最初の予定までスクロールした状態で開きます。そのため、表示範囲の外に予定が隠れることはありません。1日の一部だけを見たい場合は、時間帯を狭めてください。",
			hours: "表示する時間帯",
			hoursDesc:
				"グリッドの最初と最後の時刻です。範囲外の予定は消えずに、上の終日欄に移ります。",
			hoursMidnight: "24時",
			hourHeight: "1時間の高さ",
			hourHeightDesc: "1時間分の高さ（ピクセル）です。高くすると詳細が見やすくなり、低くすると1日の多くが収まります。",
			nowLine: "現在時刻の線",
			nowLineDesc: "今日の列の、現在時刻の位置に線を引きます。",
			listHeading: "リスト表示",
			listDays: "表示する日数",
			listDaysDesc: "表示中の日から、何日先までリストに含めるかです。",
		},
		heatmap: {
			metric: "集計対象",
			weeks: "週数",
			weeksDesc: "何週間分の履歴を表示するかです。",
			advanced: "詳細設定",
			advancedDesc:
				"独自の集計方法を作ります。日付をフロントマターの日付から取る、ノートを数える" +
				"代わりに数値を合計する、どのノートを数えるかを選ぶ、といったことができます。" +
				"オフにすると、すべてのノートをファイルの日付で数えます。",
			metricHeading: "数えるもの",
			rangeHeading: "範囲",
			source: "日付の取得元",
			sourceDesc: "ノートがどのマスに入るかを決める日付です。",
			sourceOptions: {
				modified: "更新日時",
				created: "作成日時",
				property: "フロントマターの日付",
			},
			dateProperty: "日付のプロパティ",
			datePropertyDesc:
				"日付が入っているフロントマターのキーです（date、due、publishedなど）。日付、" +
				"日時、または[[デイリーノート]]へのリンクを受け付けます。リストの場合は項目" +
				"ごとに1回数えます。このキーがないノートはスキップされます。",
			datePropertyPlaceholder: "date",
			value: "各ノートで加算する値",
			valueDesc: "ノートごとに1、またはプロパティの数値（読書した分数、書いたページ数、走った距離など）です。",
			valueOptions: {
				count: "1（ノートを数える）",
				sum: "プロパティの数値",
			},
			valueProperty: "値のプロパティ",
			valuePropertyDesc:
				"加算する数値が入っているフロントマターのキーです。値が数値でない" +
				"ノートは、1として数えずにスキップします。",
			valuePropertyPlaceholder: "minutes",
			unit: "単位",
			unitDesc: '日ごとの値を表示するときに、数値の後ろに付ける単位です（例：「5回」の「回」）。空欄なら集計対象に合わせます。',
			unitPlaceholder: "件のノートを編集",
			rules: "数えるノートの条件",
			rulesDesc: "ノートが数えられるために満たす条件です。ルールがなければ、すべてのノートを数えます。",
			match: "条件の組み合わせ",
			matchOptions: {
				all: "すべてのルール（AND）",
				any: "いずれかのルール（OR）",
			},
			fieldOptions: {
				property: "プロパティ",
				tag: "タグ",
				folder: "フォルダ",
				path: "パス",
			},
			opOptions: {
				is: "等しい",
				isNot: "等しくない",
				contains: "含む",
				notContains: "含まない",
				gt: "より大きい",
				lt: "より小さい",
				exists: "設定あり",
				missing: "設定なし",
			},
			keyPlaceholder: "プロパティ",
			valuePlaceholder: "値",
			addRule: "ルールを追加",
			removeRule: "ルールを削除",
		},
		stats: {
			advanced: "詳細設定",
			advancedDesc:
				"表示する統計を選んだり、添付ファイルを種類別に分けたり、カスタムの" +
				"集計を追加したりできます。オフにすると、デフォルトの統計を表示します。",
			builtins: "表示する統計",
			builtinsDesc: "表示する組み込みの統計を選びます。連続記録の日数は、デイリーノートが設定されているときだけ表示されます。",
			attachmentTypes: "添付ファイルの内訳",
			attachmentTypesDesc: "選択したファイルの種類（画像、PDFなど）ごとに、件数のタイルを別に追加します。",
			customCounts: "カスタム集計",
			customCountsDesc:
				"各行は、クエリに一致するファイルを数えて合計をタイルとして表示します。" +
				"クエリの書き方は検索バーと同じです（#タグ、プロパティならkey:value、または通常のテキスト）。",
			labelPlaceholder: "ラベル",
			iconPlaceholder: "アイコン",
			queryPlaceholder: "#project または status:active",
			addCount: "集計を追加",
			removeCount: "集計を削除",
		},
		metricOptions: {
			modified: "編集したノート",
			created: "作成したノート",
		},
		savedSearch: {
			query: "クエリ",
			queryDesc:
				"検索バーと同じ書き方です。名前・本文なら通常のテキスト、タグなら" +
				"#タグ、フロントマターのプロパティならkey:valueを使います。",
			queryPlaceholder: "#project、status:active、会議メモ など",
			display: "表示形式",
			displayDesc: "一致した結果を、コンパクトなリストかタイルで表示します。",
			displayList: "リスト",
			displayTiles: "タイル",
			maxResults: "最大件数",
			maxResultsDesc: "一度に表示する結果の最大数です。",
		},
		searchBar: {
			placeholder: "プレースホルダー",
			placeholderDesc:
				"空の入力欄に表示するテキストです。空欄にすると、" +
				"設定 → 検索で指定したものを使います。",
			filters: "フィルター行",
			filtersDesc:
				"入力欄の下に、ヘッダーの検索バーと同じファイルの種類のチップを" +
				"表示します。表示するには、縦に長めのカードが必要です。",
			filterTypes: "フィルターチップ",
			filterTypesDesc:
				"このカードに表示するチップです。チップは、保管庫にその種類の" +
				"ファイルが実際にあるときだけ表示されます。",
			filterTypeGlobalOff: "設定 → フィルターで、すべての検索バーで非表示になっています。",
			instantAnswers: "インスタント回答",
			instantAnswersDesc:
				"この検索バーでのインスタント回答をオフにします。ダッシュボード全体や保管庫全体でオフにしたものは、ここでもオフのままです。",
			instantAnswerOff: "このダッシュボードまたは保管庫全体でオフになっています。",
			instantAnswersVaultOff: "インスタント回答は、設定 → 検索で保管庫全体でオフになっています。",
			button: "ボタン",
			buttonDesc:
				"入力欄の横に置く操作ボタンです。新規ノートを作成するか、入力した" +
				"内容をWebで検索します。",
			buttonNone: "なし",
			buttonNewNote: "新規ノート",
			buttonSearchOnline: "Webで検索",
			seamless: "枠なし",
			seamlessDesc:
				"カードの枠（境界線・背景・タイトル行）をなくし、" +
				"ダッシュボード上の独立した検索バーとして見えるようにします。",
			sizeNote:
				"入力欄の太さはカードの高さと同じです。バーを太く・細くするには、" +
				"配置モードでカードの端をドラッグしてください。",
		},
		tiles: {
			heading: "ボタン",
			sizing: "ボタンのサイズ設定",
			sizingDesc:
				"ボタンをカードいっぱいに広げるか（カードの大きさに関係なくすべての" +
				"ボタンが表示され、カードに合わせて伸縮します）、固定のピクセル" +
				"サイズにするか（すべてが収まらない小さなカードはスクロールします）を選びます。" +
				"いっぱいに広げたボタンも、縦横どちらかで小さすぎて使いにくくなる" +
				"大きさで縮小が止まり、そのサイズでも収まらないカードはやはりスクロールします。" +
				"この設定ができる前に作ったカードは、切り替えるまで固定サイズのままです。" +
				"スタイルごとにサイズを保存するので、元に戻すと以前の設定が" +
				"復元されます。",
			sizingScale: "カードいっぱいに広げる",
			sizingFixed: "固定サイズ（従来）",
			across: "横に並べるボタン数",
			acrossDesc:
				"カードの横幅にボタンを何個並べるか、つまりボタン1個の幅を決めます（カードの幅に" +
				"対する割合で、ボタンが保つ最小サイズまで小さくなります）。高さも" +
				"同じしくみで、行がカードの高さを分け合うので、カードが低くなると" +
				"ボタンが隠れるのではなく低くなります。配置モードでボタンの右下の角をドラッグすれば、" +
				"2〜3マス分の幅（または高さ）にできます。グリッドは縦横とも" +
				"半マス単位なので、半マス分にもできます。",
			minSize: "ボタンの最小サイズ",
			minSizeDesc:
				"ボタン全体がどこまで小さくなれるか（ピクセル）です。これより小さくなる場合は、" +
				"縮小せずにカードをスクロールします。半マスのボタンはその半分で止まります。" +
				"デフォルトは低めで、スクロールバーが出るよりボタンが収まることを優先します。" +
				"よく小さくして使うカードでボタンを押しやすく保ちたい場合は値を上げてください。" +
				"収まらなくなるとカードがスクロールします。",
		},
		links: {
			heading: "リンク",
			autoShift: "タイルの自動移動（ベータ）",
			autoShiftDesc:
				"オンにすると、ドラッグ中のタイルが他のタイルを押しのけます（スマートフォンの" +
				"ウィジェットのように）。デフォルトはオフで、タイルは完全に自由に配置でき、重なることもあります。",
			labelPlaceholder: "ラベル",
			iconPlaceholder: "アイコン",
			pickCommand: "コマンドを選択…",
			targetUrl: "リンク先（URL）",
			targetNote: "リンク先（ノートのパス）",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			removeLink: "リンクを削除",
			addLink: "リンクを追加",
			addCommand: "コマンドを追加",
			buttonSize: "ボタンのサイズ",
			buttonSizeDesc:
				"ボタンのデフォルトのサイズです。配置モードでボタンの右下の角を" +
				"ドラッグすると、個別にサイズを変えられます。",
		},
		templater: {
			missing: "Templaterが有効になっていません",
			missingDesc:
				"このカードは、Templaterプラグインを呼び出してノートを作成します。インストールして" +
				"有効にすれば、これらのタイルが使えるようになります。それまでの間、ここで" +
				"他に変更する必要はありません。",
			autoShift: "タイルの自動移動（ベータ）",
			autoShiftDesc:
				"オンにすると、ドラッグ中のタイルが他のタイルを押しのけます（スマートフォンの" +
				"ウィジェットのように）。デフォルトはオフで、タイルは完全に自由に配置でき、重なることもあります。",
			buttonSize: "ボタンのサイズ",
			buttonSizeDesc:
				"タイルのデフォルトのサイズです。タイルの右下の角をドラッグすると、" +
				"タイルごとにサイズを変えられます。",
			heading: "テンプレート",
			labelPlaceholder: "ラベル",
			pickTemplate: "テンプレートを選択…",
			pickTemplateTooltip: "このタイルで実行するTemplaterのテンプレートを選びます",
			pickFolderTooltip:
				"新しいノートを入れるフォルダを選びます。保管庫のルートは「Obsidianが" +
				"新規ノートを作成する場所」を意味します。",
			filenamePlaceholder: "ファイル名",
			filenameTooltip:
				"新しいノートの名前（拡張子なし）です。{{date}}、{{date:FMT}}、" +
				"{{time}}、{{time:FMT}}、{{prompt}}が置き換えられます。空欄にすると、" +
				"Templaterが名前を付けます。",
			openOn: "新しいノートを開く（クリックで、開かずに作成だけするよう切り替え）",
			openOff: "新しいノートを開かずに作成だけする（クリックで、開くよう切り替え）",
			removeTile: "タイルを削除",
			addTile: "テンプレートを追加",
			tokensHelp:
				"ファイル名には{{date}}、{{date:YYYY-MM}}、{{time}}、{{time:HH-mm}}と、" +
				"ノートを作成する前に名前の残りの部分を入力するよう求める{{prompt}}を" +
				"使えます。テンプレート内のもの（<% tp.* %>、ユーザー" +
				"スクリプト、tp.system.prompt()）はすべてTemplater自身が処理し、Templaterの" +
				"コマンドから実行したときとまったく同じように動作します。",
			tokensHelpScoped: (folder: string) =>
				`テンプレートの選択肢には、Templater自身のテンプレートフォルダ「${folder}」内の` +
				"テンプレートが表示されます。ファイル名には{{date}}、{{date:YYYY-MM}}、{{time}}、" +
				"{{time:HH-mm}}と、ノートを作成する前に名前の残りの部分を入力するよう" +
				"求める{{prompt}}を使えます。テンプレート内のもの" +
				"（<% tp.* %>、ユーザースクリプト、tp.system.prompt()）はすべてTemplater自身が処理し、" +
				"Templaterのコマンドから実行したときとまったく同じように動作します。",
		},
		tasks: {
			source: "取得元",
			sourceDesc:
				"Markdownのチェックボックスはどこでも使えます。TaskNotesは、そのプラグインの" +
				"タスクノートをフロントマターから読み取ります（TaskNotesには他のプラグインから問い合わせるAPIがないため、" +
				"フィールド名は 設定 → Hearth で変更できます）。" +
				"Kanbanは、Kanbanプラグインのボードノートを1つ読み取り、見出しごとに1列にします。",
			sourceCheckbox: "Markdownのチェックボックス",
			sourceTaskNotes: "TaskNotesプラグイン",
			sourceKanban: "Kanbanプラグイン",
			kanbanBoard: "ボードノート",
			kanbanBoardDesc:
				"読み込むKanbanプラグインのボードです。空欄にすると、対象範囲内でフロントマターに" +
				"「kanban-plugin」キーを持つ最初のノートを自動で検出します。",
			kanbanBoardPlaceholder: "自動検出",
			pickBoard: "Kanbanボードを選択",
			kanbanExtended: "日付と優先度",
			kanbanExtendedDesc:
				"各カードに書かれた日付・優先度・繰り返しの記号を読み取り" +
				"（obsidian-tasksプラグイン互換）、インジケーターとして表示し、" +
				"リストの並べ替えに使い、カードから編集できるようにします。オフにすると" +
				"カードをプレーンテキストとして読み込みます。",
			checkboxExtended: "日付と優先度",
			checkboxExtendedDesc:
				"各チェックボックスの行内に書かれた日付・優先度・繰り返しの記号を読み取り" +
				"（obsidian-tasksプラグイン互換）、インジケーターとして表示し、" +
				"リストの並べ替えに使い、項目の右クリックメニューから" +
				"編集できるようにします。オフにするとチェックボックスをプレーンテキストとして読み込みます。",
			checkboxStatuses: "タスクの状態（ボードの列）",
			checkboxStatusesDesc:
				"Kanbanボードに列として表示するチェックボックスの状態です。1行に1つ、" +
				"「[記号] ラベル」の形で書きます。記号は「- [ ]」の中に入る文字です。" +
				"完了扱いにする状態には「(done)」を付けます。カードを列にドラッグすると、" +
				"その列の記号が書き込まれます。空欄にするとデフォルトのセット（未着手、進行中、完了）を使います。",
			quickView: "クリックでクイックビュー",
			quickViewDesc:
				"タスクをクリックすると、すぐにノートを開く代わりに小さなポップオーバーを表示します。" +
				"メタデータと説明をその場で編集でき、ノート全体を開くボタンや" +
				"タスクを削除するボタンもあります。オフにすると" +
				"クリックでノートを開きます。",
			convertTemplate: "ノートのテンプレート",
			convertTemplateDesc:
				"ノートはこのテンプレートから作成されます。Templaterがインストールされていれば、" +
				"TemplaterのテンプレートはTemplaterで処理されます。それ以外の場合は{{title}}、{{date}}、" +
				"{{time}}が埋め込まれます。空欄にすると空のノートになります。",
			convertTemplatePlaceholder: "例: Templates/Task.md",
			pickTemplate: "テンプレートノートを選択",
			convertScrape: "メタデータをフロントマターに移す",
			convertScrapeDesc:
				"カードをノートに変換するとき、日付・優先度・繰り返しの記号を" +
				"絵文字マーカーとしてボード上のリンクに残さず、" +
				"新しいノートのYAMLフロントマターに移します。",
			newTaskAsNote: "新しいタスクをノートとして作成",
			newTaskAsNoteDesc:
				"新しいカードを行内のチェックボックスではなく、最初から独立したノート" +
				"（ボード上ではリンク）として作成します。「ノートに変換」と同じく、" +
				"「タスクから作るノート」のフォルダ・テンプレート・フロントマターの設定が適用されます。",
			layout: "レイアウト",
			layoutDesc:
				"リスト、またはステータスごとにまとめたKanbanボードです。ボードでは、カードを" +
				"列の間でドラッグして移動し、列見出しをドラッグして並べ替え、列の目のアイコンで" +
				"列を非表示にし、チェックのアイコンでその列のカードを自動で完了にできます。" +
				"カードを右クリックすると独立したノートに変換できます。アイゼンハワーマトリクスでは、タスクを象限の間でドラッグして優先度を変更できます。",
			layoutList: "リスト",
			layoutKanban: "Kanbanボード",
			layoutMatrix: "アイゼンハワーマトリクス",
			matrixLayout: "軸の配置",
			matrixUrgency: "緊急度の向き",
			matrixUrgencyDesc: "緊急かどうかを分ける軸です。重要度はもう一方の軸になります。",
			matrixUrgencyColumns: "横方向（列）",
			matrixUrgencyRows: "縦方向（行）",
			matrixUrgentSide: "緊急の側",
			matrixImportantSide: "重要の側",
			matrixSideLeft: "左",
			matrixSideRight: "右",
			matrixSideTop: "上",
			matrixSideBottom: "下",
			matrixNames: "軸の名前",
			matrixNamesDesc: "カード上での軸の両端と、未分類の帯の呼び名です。空欄にすると組み込みの名前を使います。",
			matrixAxisName: {
				urgent: "緊急",
				notUrgent: "緊急でない",
				important: "重要",
				notImportant: "重要でない",
				unsorted: "未分類の帯",
			},
			matrixQuadrants: "象限",
			matrixQuadrantsDesc:
				"各象限の名前と、タスクをその象限に入れる優先度です。名前は" +
				"カード上でダブルクリックしても変更できます。",
			matrixName: "名前",
			matrixHeading: "アイゼンハワーマトリクス",
			matrixDesc:
				"タスクは優先度に対応する象限に入ります。各象限に入れる優先度を選んでください。" +
				"タスクを象限にドラッグする（または右クリックメニューの「〜に移動」を使う）と、" +
				"その象限の最初の（最も高い）優先度が設定されます。",
			matrixQuadrant: {
				do: "実行 — 緊急かつ重要",
				schedule: "計画 — 重要だが緊急でない",
				delegate: "委任 — 緊急だが重要でない",
				eliminate: "排除 — どちらでもない",
			},
			matrixQuadrantWrites: (priority: string) => `ここにドロップしたタスクは優先度「${priority}」になります。`,
			matrixQuadrantEmpty: "優先度が選ばれていません。この象限は空のままで、ドロップも受け付けません。",
			matrixChipElsewhere: (quadrant: string) => `現在は「${quadrant}」にあります。クリックするとここに移動します`,
			matrixShowUnsorted: "未分類のタスクを表示",
			matrixShowUnsortedDesc:
				"どの象限にも入らないタスクを、マトリクスの下の帯に表示します。タスクを" +
				"この帯にドロップすると優先度が解除されます。",
			matrixReset: "マトリクスをデフォルトに戻す",
			noteFromTask: "タスクから作るノート",
			noteFromTaskDesc:
				"タスクの「ノートを作成」ボタンと右クリックの「ノートに変換」で" +
				"作られるノートの設定です。タスク名をノート名にして、このフォルダに、このテンプレートから" +
				"作成します。タスクはそのノートへのリンクになります。",
			convertFolder: "フォルダ",
			convertFolderDesc:
				"ノートを作成する場所です。フォルダがなければ作成します。空欄にすると、" +
				"Obsidianで新規ノートを作成するデフォルトの場所になります。",
			convertFolderPlaceholder: "例: Projects/Tasks",
			pickFolder: "フォルダを選択",
			display: "表示",
			kanbanColumns: "Kanbanの列",
			kanbanHidden: (columns: string) => `非表示: ${columns}`,
			kanbanDoneColumns: (columns: string) => `自動完了: ${columns}`,
			kanbanCustomOrder: "列の並び順がカスタマイズされています。",
			showAll: "すべて表示",
			resetColumns: "列の並び順・表示・完了列をリセット",
			doneStatuses: "完了として扱うステータス",
			doneStatusesDesc:
				"TaskNotesを取得元にする場合に、完了として扱うステータスの値を1行に1つ書きます" +
				"（「完了済みを表示」がオンでない限り非表示になり、表示するときは取り消し線が付きます）。" +
				"空欄にすると 設定 → Hearth の完了値だけを使います。" +
				"たとえば「canceled」を加えると、キャンセルしたタスクも完了として数えます。",
			doneStatusesPlaceholder: "done\ncanceled",
			fields: "フィールド",
			fieldsFollowGlobal:
				"設定 → Hearth → 連携 のフィールドに従っています。オンにすると、" +
				"このカード独自のフィールドを設定できます。",
			fieldsCustomize: "カスタマイズ…",
			fieldsTitle: "タスクのフィールド",
			fieldsHint:
				"タスクに表示するすべての項目を、表示順に並べます。フィールドは自由に定義できます。名前を" +
				"付け、表示方法を選び、読み取るキーを指定してください。",
			fieldsEmpty: "フィールドはまだありません。タスクにはテキストだけが表示されます。",
			fieldsNone: "なし — タスクにはテキストだけが表示されます。",
			fieldsApplyClose: "適用して閉じる",
			fieldsApplyDesc: "閉じずに適用して、調整を続けます。",
			fieldsReset: "すべてのフィールドを削除",
			fieldUnnamed: "無題のフィールド",
			fieldDefaultName: (n: number) => `フィールド${n}`,
			fieldAdd: "フィールドを追加",
			fieldEdit: "フィールドを編集",
			fieldRemove: "フィールドを削除",
			fieldMoveUp: "上へ移動",
			fieldMoveDown: "下へ移動",
			fieldExpand: "展開",
			fieldCollapse: "折りたたむ",
			fieldName: "名前",
			fieldNameDesc: "このフィールドの名前です。下の設定をオンにした場合だけタスクに表示されます。",
			fieldNamePlaceholder: "例: 優先度",
			fieldShowName: "タスクに名前を表示",
			fieldShowNameDesc: "各値の前にフィールド名を付けます（「優先度: 緊急」）。",
			fieldDisplay: "表示方法",
			fieldDisplayDesc:
				"このフィールドの値の表示方法です。最後の2つはタスクに何も表示せず、" +
				"代わりに行やカード全体に色を付けます。これを使えるのは1つのフィールドだけです。" +
				"「色付きの点とラベル」は優先度用の表示で、優先度を読み取る" +
				"フィールドで選べます。説明は常に、独立したサブ箇条書きの" +
				"ブロックとして表示されます。",
			fieldAmbientTaken: (name: string) =>
				`色付けと光彩はすでに「${name}」で使われています。タスクの背景とリングは` +
				`1つずつしかないため、使えるフィールドは1つだけです。`,
			fieldAmbientIgnored: (name: string) =>
				`このフィールドは何も色付けしません。「${name}」がすでにタスクの色付けかリングを使っていて、` +
				`使えるフィールドは1つだけです。どちらかの表示方法を変更してください。`,
			fieldStyles: {
				pill: "チップ",
				dot: "色付きの点",
				dotlabel: "色付きの点とラベル",
				text: "プレーンテキスト",
				hue: "タスク全体に色を付ける",
				glow: "タスクの周りを光らせる",
			},
			fieldOpacity: "強さ",
			fieldOpacityDesc:
				"色をどのくらい強く付けるかです。使われるのは値の色だけで、" +
				"色が設定されていない値ではタスクの見た目は変わりません。",
			fieldKeys: "キー",
			fieldKeysDesc:
				"このフィールドが値を読み取る場所です。値があるキーはすべて表示されるので、" +
				"1つのフィールドに複数のメタデータをまとめられます。",
			fieldKeysEmpty: "キーはまだありません。このフィールドには何も表示されません。",
			fieldNoKeys: "キーなし",
			fieldAddKey: "キーを追加",
			fieldAddKeyDesc:
				"Hearth独自の値では、チェックボックス行の優先度、ボードの列、" +
				"解析した日付を読み取れます。プロパティでは、フロントマターのあらゆる値を読み取れます。",
			fieldAddBuiltin: "Hearthが読み取る値",
			fieldAddProperty: "フロントマターのプロパティ",
			fieldAddKeyTyped: "プロパティ名を入力…",
			fieldAddKeyPlaceholder: "プロパティ名",
			fieldRemoveKey: "キーを削除",
			fieldPickProperty: "ノートで見つかったプロパティ",
			fieldPickBuiltin: "Hearthが自分で解析する値",
			fieldKeyAlreadyAdded: (key: string) => `「${key}」はすでにこのフィールドのキーです。`,
			fieldMapValues: "値と色",
			fieldMappedValues: (n: number) => `${n}個の値を対応付け済み`,
			fieldNoMappings: "値をそのまま表示",
			fieldMapHint:
				"値ごとに分かりやすいラベルと色を表示します。対応付けていない値も" +
				"そのまま表示されます。",
			fieldMapEmpty: "対応付けた値はまだありません。",
			fieldDateKey: "日付として表示",
			fieldIsDate: "日付として扱う",
			fieldIsDateDesc:
				"このプロパティを相対的な日付（「明日」）で表示し、過去・今日・今後の" +
				"どれに当たるかで色分けして、カレンダーで編集できるようにします。",
			fieldDateHint:
				"日付には対応付ける決まった値がないので、どの範囲に当たるかで" +
				"色分けします。ラベルは省略できます。空欄にすると日付そのものを表示します。",
			fieldDateLabelPlaceholder: "表示名（省略可）",
			dateRelations: {
				"<today": "今日より前",
				today: "今日",
				">today": "今日より後",
			},
			fieldNotMappable:
				"このキーには対応付けられる個別の値がありません。元の形式のまま表示します。",
			fieldMatchPlaceholder: "例: high",
			fieldLabelPlaceholder: "省略可",
			fieldValueColumn: "ノート内の値",
			fieldWhenColumn: "日付の範囲",
			fieldShownColumn: "タスクでの表示",
			fieldColorColumn: "色",
			fieldAddMapping: "値を追加",
			fieldValuesFound: (n: number) => `ノートから選ぶ（${n}件）`,
			fieldRemoveMapping: "値を削除",
			fieldPickValue: "保管庫内でこのキーに使われている値",
			fieldColor: "色",
			fieldColorCustom: "カスタムカラー",
			fieldColorClear: "色なし",
			colorNames: {
				"--color-red": "赤",
				"--color-orange": "オレンジ",
				"--color-yellow": "黄",
				"--color-green": "緑",
				"--color-cyan": "シアン",
				"--color-blue": "青",
				"--color-purple": "紫",
				"--color-pink": "ピンク",
			},
			sourceNames: {
				status: "ステータス（TaskNotes）",
				column: "ボードの列（Kanban）",
				priority: "優先度",
				start: "開始日",
				scheduled: "予定日",
				due: "期限",
				doneDate: "完了日",
				description: "説明",
			},
			showCompleted: "完了済みを表示",
			showCompletedKanbanDesc:
				"Kanbanボードでは、完了したタスクは常に「完了」列に表示されます。",
			maxTasks: "表示するタスクの最大数",
			maxTasksDesc: "期限順（期限切れ・期限が近いものが先）、次にファイル順で並べます。",
			folders: "フォルダ",
			scope: "対象範囲",
			scopeAll: "保管庫全体",
			scopeWhitelist: "これらのフォルダのみ",
			scopeBlacklist: "これらのフォルダ以外すべて",
			foldersDesc: "1行に1つずつフォルダのパスを書きます。",
		},
		favorites: {
			display: "表示",
			displayDesc: "行を並べたコンパクトなリスト、または名前の上にアイコンを置いたタイルのグリッドです。",
			displayList: "リスト",
			displayTiles: "タイル",
			titleAdvanced: "詳細設定",
			titleAdvancedDesc:
				"ファイル名の代わりに、フロントマターのプロパティ（エイリアスや、" +
				"そのために保管庫で管理しているタイトルなど）でノート名を表示します。プロパティがないノートは" +
				"ファイル名のままです。オフにするとファイル名を表示します。",
			titleProperty: "タイトルに使うプロパティ",
			titlePropertyDesc:
				"最初の空でない値をノート名にするプロパティです。名前は大文字と小文字を" +
				"区別せずに照合されます。このプロパティがないノートはファイル名で表示されます。",
			titlePropertyPlaceholder: "aliases",
			heading: "お気に入り",
			headingDesc: "すべてのお気に入りカードに表示されるノートです。",
			ownList: "このカード専用のリストを使う",
			ownListOn:
				"このカードは専用のノートを表示し、保管庫全体のリストは無視します。オフにすると再び保管庫のお気に入りに従います。その場合、下のリストは破棄されます。",
			ownListOff:
				"このカードは、他のお気に入りカードと同じく保管庫全体のお気に入りに従います。オンにすると、今表示しているリストをもとに、このカード専用のリストを作成します。",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			remove: "外す",
			addFavorite: "お気に入りを追加",
		},
		clock: {
			style: "スタイル",
			styleDigital: "デジタル",
			styleAnalog: "アナログ",
			styleStacked: "縦積み",
			styleFlip: "フリップ",
			styleRing: "リング",
			styleShapes: "シェイプ（エクスプレッシブ）",
			styleOrbit: "オービット（エクスプレッシブ）",
			styleExpressiveDesc: "エクスプレッシブデザイン（「スタイル」タブ）では、シェイプとオービットの文字盤が追加されます。",
			styleFallbackDesc: (face: string) =>
				`この文字盤はエクスプレッシブデザイン（「スタイル」タブ）専用です。クラシックのカードでは代わりに「${face}」で表示します。`,
			hourFormat: "時刻の形式",
			hourFormatAuto: "自動（ロケール）",
			hourFormat12: "12時間制",
			hourFormat24: "24時間制",
			showSeconds: "秒を表示",
			showGreeting: "あいさつを表示",
			playful: "遊び心のあるあいさつ",
			playfulDesc: "普通のあいさつの代わりに、ちょっとふざけたランダムなあいさつを表示します。",
			greetingOverride: "あいさつを上書き",
			greetingOverrideDesc: "空欄にすると自動のあいさつを使います。",
			date: "日付",
			dateFull: "月日と曜日",
			dateLong: "年月日と曜日",
			dateShort: "短い形式（ロケール）",
			dateIso: "ISO（2026-06-29）",
			dateWeekday: "曜日のみ",
			dateCustom: "カスタム形式…",
			dateNone: "非表示",
			customFormat: "カスタムの日付形式",
			customFormatDesc: "moment.jsの書式です。例: ddd D MMM、YYYY/MM/DD。",
			customFormatPlaceholder: "ddd D MMM",
		},
		calculator: {
			angleUnit: "角度の単位",
			angleUnitDesc: "sinやcosなどの三角関数で使う単位です。",
			degrees: "度",
			radians: "ラジアン",
			keypad: "キーパッド",
			keypadDesc:
				"カードに画面上のキーパッドを表示します。基本（数字と演算）または関数電卓（関数・累乗・定数を追加）を選べます。",
			keypadNone: "非表示",
			keypadBasic: "基本",
			keypadScientific: "関数電卓",
		},
		dataview: {
			language: "クエリの種類",
			languageDesc:
				"Dataviewクエリ言語（TABLE / LIST / TASK）またはDataviewJSのコードです。",
			languageDql: "Dataviewクエリ（DQL）",
			languageJs: "DataviewJS",
			query: "クエリ",
			queryDqlDesc:
				"```dataview コードブロックの中に書くのと同じ形式のDataviewクエリです" +
				"（囲みの記号は不要）。「現在のノート」がない状態で実行されるため、保管庫全体を対象にするクエリは" +
				"問題なく動きますが、this.fileを基準にするクエリは参照先のファイルがありません。",
			queryJsDesc:
				"```dataviewjs ブロックの中に書くのと同じDataviewJSのコードです（囲みの記号は不要）。" +
				"dv APIを使えます。任意のJavaScriptが実行されるため、信頼できるコードだけを使ってください。",
			queryDqlPlaceholder:
				'TABLE file.mtime AS "Modified" FROM #project SORT file.mtime DESC',
			queryJsPlaceholder: "dv.list(dv.pages('#project').file.link)",
		},
		datacore: {
			language: "クエリの種類",
			languageDesc:
				"ライブリストとして表示するDatacoreクエリ、または独自のビューを描くDatacoreスクリプトです。",
			languageQuery: "Datacoreクエリ",
			languageJsx: "スクリプト（JSX）",
			languageJs: "スクリプト（JS）",
			languageTsx: "スクリプト（TSX）",
			languageTs: "スクリプト（TS）",
			query: "クエリ",
			queryDesc:
				"Datacoreクエリです（例: @page and #project）。Hearthは一致したものを" +
				"リンクのライブリストとして表示します。「現在のノート」がない状態で実行されるため、保管庫全体を対象にするクエリは" +
				"問題なく動きますが、ファイルを基準にするクエリは参照先のファイルがありません。",
			queryPlaceholder: "@page and #project",
			script: "スクリプト",
			scriptDesc:
				"```datacorejsx ブロックの中に書くのと同じDatacoreスクリプトです（囲みの記号は不要）。" +
				"dc APIを使え、スクリプトは表示するビューを返します。任意のコードが" +
				"実行されるため、信頼できるコードだけを使ってください。",
			scriptPlaceholder:
				"return function View() {\n\tconst pages = dc.useQuery(\"@page and #project\");\n\treturn <dc.List rows={pages} renderer={(p) => <dc.Link link={p.$link} />} />;\n}",
			pageSize: "1ページの行数",
			pageSizeDesc: "生成したリストをこの行数ごとにページ分けします。0にすると一致したものをすべて一度に表示します。",
		},
		git: {
			missing: "Gitプラグインが有効になっていません",
			missingDesc:
				"このカードはGitコミュニティプラグインの内容を表示します。カードに何か表示するには、" +
				"プラグインをインストールして有効にし、リポジトリを設定してください。",
			sections: "セクション",
			actions: "ボタン",
			destructive: "元に戻せません。",
			removeAction: "このボタンを削除",
			addAction: "ボタンを追加",
			addActionPlaceholder: "選択…",
			actionStyle: "ボタンのスタイル",
			actionStyleDesc: "アイコンのみならコンパクトに、ラベル付きなら幅の広いカードで読みやすくなります。",
			actionStyles: {
				icon: "アイコンのみ",
				labelled: "アイコンとラベル",
			},
			committing: "コミット",
			commitScope: "コミットする対象",
			commitScopeDesc:
				"「コミット」ボタンと「コミットして同期」ボタンに含めるファイルです。",
			commitScopes: {
				smart: "ステージ済みのファイルがあればそれのみ、なければすべて",
				all: "すべて",
				staged: "ステージ済みのファイルのみ",
			},
			askForMessage: "メッセージを入力する",
			askForMessageDesc:
				"Gitプラグインの「…with specific message」コマンドと同じように、" +
				"毎回コミットメッセージの入力を求めます。",
			commitMessage: "コミットメッセージ",
			commitMessageDesc:
				"このカードのコミットボタンで使います。空欄にすると、Gitプラグイン" +
				"自身のコミットメッセージのテンプレートを使います。",
			commitMessagePlaceholder: "vault backup: {{date}}",
			skipConfirm: "確認を省略",
			skipConfirmDesc:
				"変更を破棄する操作を、確認せずにすぐ実行します。破棄した" +
				"変更は元に戻せません。",
			display: "表示",
			changeLimit: "表示する変更ファイル数",
			changeLimitDesc: "0にすると、変更されたファイルをすべて表示します。",
			showPaths: "フォルダを表示",
			showPathsDesc: "変更された各ファイルの名前の下に、そのフォルダを表示します。",
			logLimit: "表示するコミット数",
			logLimitDesc: "ログのセクションに表示する最近のコミットの数です。",
			refresh: "再読み込みの間隔",
			refreshDesc:
				"Gitプラグイン自身の更新に従うのに加えて、リポジトリを読み直す間隔（分）です。" +
				"0（デフォルト）にすると、その更新だけに従います。" +
				"Obsidian内で行った操作は、それですべて反映されます。",
		},
		operon: {
			view: "ビュー",
			viewDesc: "このカードがOperonから表示する内容です。",
			viewList: "タスクリスト",
			viewBoard: "ステータスボード",
			viewAgenda: "アジェンダ",
			viewTimer: "タイマー",
			scope: "対象範囲",
			scopeDesc:
				"Operon独自の範囲指定ビューを使うか、下のフィルターを適用します。" +
				"期限切れや今日の予定の判定はOperonが行うため、" +
				"Operonのルールが変わっても範囲指定は正しく保たれます。",
			scopeQuery: "カスタムフィルター",
			scopeNormal: "すべてのタスク",
			scopeToday: "今日の予定",
			scopeOverdue: "期限切れ",
			scopeRecent: "最近操作したタスク",
			createAs: "新しいタスク",
			createAsDesc:
				"カードの「+」でOperonに作成させるものです。「Operonのデフォルト」はOperon自身の" +
				"設定に従います。他の2つは、Operonに設定された作成先のどちらを使うかを選びます。" +
				"片方が解決できないときに便利です。実際にタスクがどこに作られるかは、" +
				"どの場合もOperonが決めます。",
			createAsDefault: "Operonのデフォルト",
			createAsInline: "ノート内にインラインで",
			createAsFile: "独立したノート",
			agendaDays: "表示する日数",
			agendaDaysDesc: "アジェンダに含める日数です（今日を含む）。",
			count: "表示するタスク数",
			countDesc: "リスト全体、またはボードの列ごとのタスクの最大数です。",
			pipelines: "パイプライン",
			pipelinesDesc: "これらのOperonパイプラインに限定します。何も選ばなければすべてが対象です。",
			statuses: "ステータス",
			statusesDesc: "これらのOperonステータスに限定します。何も選ばなければすべてが対象です。",
			priorities: "優先度",
			prioritiesDesc: "これらのOperon優先度に限定します。何も選ばなければすべてが対象です。",
			checkbox: "完了状態",
			checkboxDesc: "含める完了状態です。デフォルトでは未完了のタスクのみです。",
			checkboxOpen: "未完了",
			checkboxDone: "完了",
			checkboxCancelled: "キャンセル",
			text: "テキスト一致",
			textDesc: "説明にこのテキストを含むタスクだけを表示します。",
			sort: "並べ替え",
			sortDesc:
				"リストとボードの各列の並び順です。未完了のタスクは常に" +
				"完了済みのタスクより前に来ます。トグルで向きを逆にします。",
			sortSmart: "スマート（日付・優先度・経過日数）",
			sortDue: "日付",
			sortPriority: "優先度",
			sortCreated: "作成日時",
			sortAlpha: "名前順",
			showDue: "日付を表示",
			showPriority: "優先度を表示",
			showStatus: "ステータスを表示",
			showRecurrence: "繰り返しのマークを表示",
			showTracker: "実行中タイマーのマークを表示",
			showPinned: "ピン留めのマークを表示",
			showFile: "ノート名を表示",
			noOptions: "これらの選択肢を読み込むには、先にOperonカードをダッシュボードに追加してください",
		},
		clip: {
			name: "ノート名",
			nameDesc: "新しいノートの名前です。ここのすべての項目で{{variables}}形式の変数を使えます。",
			folder: "フォルダ",
			folderDesc: "新しいノートの保存先です。ここでも変数を使えます（例: Clippings/{{feed}}）。空欄にすると保管庫のルートになります。",
			folderPlaceholder: "保管庫のルート",
			pickFolder: "フォルダを選択",
			properties: "プロパティ",
			propertiesDesc: "各値はテンプレートです。結果が空になったプロパティはノートに含まれません。",
			propertyName: "名前",
			propertyValue: "値（例: {{title}}）",
			addProperty: "プロパティを追加",
			removeProperty: "プロパティを削除",
			resetProperties: "デフォルトのプロパティに戻す",
			types: {
				text: "テキスト",
				list: "リスト",
				number: "数値",
				checkbox: "チェックボックス",
				date: "日付",
				datetime: "日時",
			},
			body: "ノートの内容",
			bodyDesc: "ノートの本文です。",
			resetBody: "デフォルトの内容に戻す",
			template: "テンプレートノート",
			templateDesc: "省略可能です。テンプレートのテキストが本文の先頭に入り、同じ変数が埋め込まれます。",
			pickTemplate: "テンプレートノートを選択",
			clearTemplate: "テンプレートをクリア",
			linkKey: "リンク用プロパティ",
			linkKeyDesc:
				"ノートの作成元を記録し、同じ項目からは新しいノートを作らずに既存のノートを開きます。空欄にすると常に新しいノートを作成します。",
			variables: "変数",
			variablesHint: "クリックするとカーソル位置に挿入します。",
			filters: "フィルター",
			filtersHint:
				"変数の後に | でフィルターをつなげます。例: {{published|date:\"D MMMM YYYY\"}}、{{title|lower|truncate:40}}。",
			vars: {
				title: "タイトル",
				date: "開催日",
				start: "開始日時",
				end: "終了日時",
				location: "場所",
				description: "説明",
				url: "リンク",
				calendar: "カレンダー名",
				uid: "予定のID",
				link: "エントリーのWebアドレス",
				content: "全文（Markdown）",
				html: "フィードから届いたままの全文（HTML）",
				excerpt: "短いプレーンテキストの要約",
				published: "公開日時",
				author: "著者",
				feed: "フィード名",
				feedUrl: "フィードのアドレス",
				categories: "カテゴリ（リスト）",
				image: "画像のアドレス",
				id: "フィード内でのエントリーのID",
				today: "今日の日付",
				now: "現在の日時",
			},
			filterDocs: {
				date: { syntax: "date:\"YYYY-MM-DD\"", desc: "日付を整形（moment.jsのトークン）" },
				lower: { syntax: "lower", desc: "小文字に変換" },
				upper: { syntax: "upper", desc: "大文字に変換" },
				title: { syntax: "title", desc: "各単語の先頭を大文字に" },
				capitalize: { syntax: "capitalize", desc: "最初の文字を大文字に" },
				trim: { syntax: "trim", desc: "両端の空白を削除" },
				truncate: { syntax: "truncate:80", desc: "指定の長さで切り詰めて…を付ける" },
				replace: { syntax: "replace:\"a\",\"b\"", desc: "すべてのaをbに置換" },
				default: { syntax: "default:\"text\"", desc: "値が空のときにこれを使う" },
				split: { syntax: "split:\",\"", desc: "テキストをリストに変換" },
				join: { syntax: "join:\", \"", desc: "リストをテキストに変換" },
				first: { syntax: "first", desc: "リストの最初の項目" },
				last: { syntax: "last", desc: "リストの最後の項目" },
				list: { syntax: "list", desc: "Markdownの箇条書き" },
				wikilink: { syntax: "wikilink", desc: "各項目を[[リンク]]にする" },
				link: { syntax: "link:\"label\"", desc: "アドレスへのMarkdownリンク" },
				blockquote: { syntax: "blockquote", desc: "各行を>で引用にする" },
				safe_name: { syntax: "safe_name", desc: "ファイル名に使えない文字を削除" },
			},
			preview: "プレビュー",
			previewOf: (name: string) => `「${name}」の内容で表示しています。`,
			previewSample: "架空の例で表示しています。",
			previewTemplate: (path: string) => `（先頭に${path}のテキスト）`,
			copied: (text: string) => `コピーしました: ${text}`,
			sampleEvent: {
				title: "プロジェクトのキックオフ",
				location: "会議室4",
				description: "議題: 目標、担当者、最初のマイルストーン。",
				calendar: "仕事",
			},
			sampleEntry: {
				title: "週刊ダイジェスト #42",
				feed: "ニュースレターの例",
				author: "山田花子",
				content: "今週は、読む価値のある記事が3本、読まなくていい記事が1本です。",
			},
		},
		rss: {
			feeds: "フィード",
			namePlaceholder: "名前（省略可）",
			urlPlaceholder: "https://example.com/feed.xml",
			addFeed: "フィードを追加",
			removeFeed: "フィードを削除",
			github: "GitHubから追加",
			githubDesc:
				"リポジトリをowner/repoの形式で入力（またはURLを貼り付け）し、フォローする対象を選んでください。HearthがAtomフィードを作成します。",
			githubPlaceholder: "owner/repo",
			githubReleases: "リリース",
			githubCommits: "コミット",
			githubBoth: "リリースとコミット",
			githubAdd: "リポジトリを追加",
			githubInvalid: "リポジトリをowner/repoの形式で入力してください。",
			githubReleasesName: "{repo}のリリース",
			githubCommitsName: "{repo}のコミット",
			mergeAll: "「すべて」タブで統合",
			mergeAllDesc:
				"すべてのフィードを新しい順に1つにまとめたタブを先頭に追加します。",
			display: "表示",
			layout: "レイアウト",
			layoutDesc: "各項目の表示方法です。",
			layoutList: "リスト（タイトルと日付）",
			layoutCards: "カード（抜粋と画像）",
			layoutCompact: "コンパクト（見出しのみ）",
			itemLimit: "フィードごとの項目数",
			itemLimitDesc: "表示する最近の項目の数です。",
			refresh: "自動更新（分）",
			refreshDesc: "フィードを再取得する間隔です。0にすると開いたときだけ取得します。",
			showImages: "画像を表示",
			showImagesDesc: "フィードにサムネイルがあれば表示します。",
			showExcerpt: "抜粋を表示",
			showExcerptDesc: "各項目の下に短いテキストの抜粋を表示します。",
			showDate: "日付を表示",
			showDateDesc: "各項目の公開日時を表示します。",
			reading: "閲覧",
			openIn: "エントリーを開く場所",
			openInDesc:
				"エントリーをクリックしたときの移動先です。Webページのないエントリー（ニュースレターなど）は、常にHearthのリーダーで開きます。",
			openInBrowser: "ブラウザ",
			openInDialog: "リーダー（ダイアログ）",
			openInTab: "リーダー（タブ）",
			readerImages: "リーダーでの画像",
			readerImagesDesc:
				"画像は送信元のサーバーから取得されるため、エントリーを開いたことが送信元に伝わります（ニュースレターはこれを利用しています）。「確認する」にすると、画像を読み込むボタンを表示します。",
			imagesAsk: "確認する",
			imagesAlways: "常に読み込む",
			imagesNever: "読み込まない",
			unreadOnly: "未読のみ",
			unreadOnlyDesc: "まだ開いていないエントリーだけを表示します。カードのフィルターボタンでも切り替えられます。",
			noteHeading: "ノートとして保存",
			noteDesc:
				"リーダーの「ノートとして保存」でエントリーから作るノートの設定です。Obsidian Web Clipperと同じようなテンプレートで、すべての項目で{{variables}}形式の変数を使え、フィルターで整形できます。",
			noteEnabled: "「ノートとして保存」を表示",
			noteEnabledDesc: "リーダーとエントリーのメニューにこの操作を表示します。",
		},
		market: {
			symbols: "銘柄",
			symbolsDesc: "カードが追跡する銘柄です。この順に表示されます。1銘柄だけを表示するスタイルでは先頭の銘柄を表示します。",
			noSymbols: "まだありません。下で検索するか、シンボルを入力してそのまま追加してください。",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			remove: "外す",
			holding: "保有",
			quantity: "数量",
			cost: "平均取得単価",
			search: "追加",
			searchDesc:
				"名前やシンボルで検索するか、入力したまま追加します: AAPL、0700.HK、510300、EUR/USD、BTC-USD、fund:161725、cg:bitcoin。",
			searchDisabled: "外部通信が無効なため、検索は使えません。入力したシンボルは追加できます。",
			searchPlaceholder: "Apple、7203.T、EUR/USD…",
			searchEmpty: "先に名前かシンボルを入力してください",
			searchButton: "検索",
			addTyped: "入力のまま追加",
			noResults: "見つかりませんでした。シンボルそのもので試すか、入力のまま追加してください。",
			add: "追加",
			added: "追加済み",
			appearance: "外観",
			style: "スタイル",
			styleDesc: "ミニマル、スポットライト、チャートは1銘柄だけを表示し、それ以外はすべての銘柄を表示します。",
			styles: {
				minimal: "ミニマル — 価格と値動き",
				spotlight: "スポットライト — 価格・チャート・統計",
				chart: "チャート — 端から端まで",
				list: "ウォッチリスト",
				tiles: "タイル",
				ticker: "ティッカーテープ",
				portfolio: "ポートフォリオ",
				lookup: "検索 — カード上で検索",
			},
			design: "デザイン",
			designDesc: "クラシック、またはMaterial 3 Expressive（チップ、アクセントカラーのトーンのコンテナ、柔らかい形）です。",
			designClassic: "クラシック",
			designExpressive: "エクスプレッシブ",
			upColor: "上昇の色",
			upColorDesc: "世界のほとんどの地域では上昇は緑ですが、中国・日本・韓国では赤です。「自動」はObsidianの言語設定に従います。",
			upColorAuto: "自動",
			upColorGreen: "上昇は緑、下落は赤",
			upColorRed: "上昇は赤、下落は緑",
			range: "チャートの期間",
			rangeDesc: "スパークラインが表示する期間です。",
			rangeDescSingle: "チャートを開いたときの期間です。カード上のチップで切り替えられます。",
			change: "値動きの表示",
			changePercent: "パーセント",
			changeAbsolute: "金額",
			changeBoth: "両方",
			baseCurrency: "ポートフォリオの通貨",
			baseCurrencyDesc: "合計はECB（欧州中央銀行）の日次レートでこの通貨に換算されます。",
			baseCurrencyAuto: "自動（保有が最も多い通貨）",
			animate: "テープをスクロール",
			animateDesc: "オフにするとテープは止まったままで、手動でスクロールします。パフォーマンスレベルを下げている場合は常にオフです。",
			display: "表示する項目",
			showName: "名前",
			showSparkline: "スパークライン",
			showStats: "統計",
			showMarketState: "市場の開閉",
			showUpdated: "最終更新",
			refresh: "更新間隔（分）",
			refreshDesc: "0にするとダッシュボードを開いたときだけ更新します。相場はカード間で共有され、閉場中の市場は最大でも30分に1回しか確認しません。",
		},
		tension: {
			about: "Kagi News · 世界の緊張度",
			aboutDesc:
				"Kagi Newsでは、言語モデルがその日の世界のヘッドラインを読み、世界の緊張度を0（平穏）から100（炎上）で採点します。これはモデルによるニュースの評価であり、測定値ではありません。カードをクリックすると、Kagi Newsで指数を開きます。",
			appearance: "外観",
			style: "スタイル",
			styleDesc: "ミニマルはスコアと、その目盛り上の位置を表示します。アーティスティックは、スコアが上がるにつれて平和から戦争へと移り変わる村を描きます。",
			styleMinimal: "ミニマル",
			styleArtistic: "アーティスティック",
			animate: "アニメーション",
			animateDesc: "ジオラマを動かします（風車、煙、飛行機）。パフォーマンスレベルやOSの「動きを減らす」設定によって止まることがあります。",
			display: "表示する項目",
			showBand: "段階（平穏〜極度に緊迫）",
			showSummary: "AIによる解説",
			showSummaryDesc: "スコアがその値になった理由について、Kagiの言語モデルが書いた解説です。",
			summaryLength: "解説の長さ",
			summarySentence: "最初の1文",
			summaryFull: "全文",
			showScale: "目盛り",
			showChange: "前日からの変化",
			showChangeDesc: "前日からスコアが何ポイント動いたかを表示します。",
			showHistory: "履歴",
			historyDays: "履歴の期間",
			days: (n: number) => `${n}日間`,
			showUpdated: "最終更新",
			refresh: "確認間隔（分）",
			refreshDesc: "Kagiは1日に1回新しい指数を公開するため、カードは前回の取得から1日経つまで問い合わせません。その後、新しい指数が出るまでこの間隔で確認します。0にするとボードを開いたときだけ確認します。",
		},
		weather: {
			location: "場所",
			search: "場所を検索",
			searchDesc:
				"名前で検索します。Hearthは座標をカードに保存するため、" +
				"検索は1回で済みます。",
			searchDisabled:
				"Hearthの設定で外部通信が無効になっているため、場所の検索は使えません。" +
				"下で座標を入力することはできます。",
			searchPlaceholder: "Tokyo、Osaka、Kyoto…（ローマ字で検索）",
			searchButton: "検索",
			searchEmpty: "検索する場所の名前を入力してください。",
			searchNoResults: "その名前に一致する場所はありません。",
			usePlace: "使用",
			reuse: "場所を再利用",
			reuseDesc: "他の天気カードですでに設定した場所です。",
			reusePick: "場所を選択…",
			unnamedPlace: "（名前のない場所）",
			clearPlace: "場所をクリア",
			coordinates: "座標",
			coordinatesDesc: "検索しない場合は、緯度と経度を10進数の度数で入力します。",
			latPlaceholder: "50.08",
			lonPlaceholder: "14.44",
			placeName: "ラベル",
			placeNameDesc: "カードでのこの場所の呼び名です。",
			placeNamePlaceholder: "自宅",

			appearance: "外観",
			style: "スタイル",
			styleDesc: "カードに表示する予報の量です。",
			styleMinimal: "ミニマル（アイコンと気温）",
			styleCompact: "コンパクト（1行）",
			styleDetailed: "詳細（指標のグリッド）",
			styleForecast: "予報（1時間ごとの曲線）",
			styleArtistic: "アーティスティック（描かれた空）",
			styleMoon: "月（今夜の月相）",
			design: "デザイン",
			designDesc:
				"クラシックな線のアイコンと描かれた空、またはMaterial 3 Expressive（フラットな天気のイラスト、チップ、アクセントカラーのトーンのコンテナ）です。",
			designClassic: "クラシック",
			designExpressive: "エクスプレッシブ",
			styleDaylight: "日照（太陽の軌道）",
			animate: "空をアニメーション",
			animateDesc:
				"流れる雲、降る雨、またたく星を表示します。低電力モードでは常にオフです。",
			animateMoonDesc:
				"月が昇って定位置に浮かび、形が変わり、星がまたたきます。低電力モードでは常にオフです。",
			animateSunDesc:
				"太陽が現在の時刻まで軌道を進み、そこで回転します。低電力モードでは常にオフです。",
			moonLayout: "レイアウト",
			moonLayoutDesc: "今夜の月に関するすべての情報、または月の形と月齢だけを表示します。",
			moonLayoutFull: "フル（夜空と詳細）",
			moonLayoutClean: "シンプル（月と月齢）",

			units: "単位",
			tempUnit: "気温",
			tempUnitC: "摂氏（°C）",
			tempUnitF: "華氏（°F）",
			windUnit: "風速",
			windUnitKmh: "キロメートル毎時（km/h）",
			windUnitMs: "メートル毎秒（m/s）",
			windUnitMph: "マイル毎時（mph）",
			windUnitKn: "ノット（kn）",
			precipUnit: "降水量",
			precipUnitMm: "ミリメートル（mm）",
			precipUnitInch: "インチ（in）",
			hourFormat: "時刻の形式",
			hourFormatAuto: "自動（ロケール）",
			hourFormat12: "12時間制",
			hourFormat24: "24時間制",

			display: "表示する項目",
			showLocation: "場所の名前",
			showCondition: "天気",
			showFeelsLike: "体感温度",
			showHighLow: "今日の最高・最低気温",
			showHumidity: "湿度",
			showWind: "風",
			showPrecip: "降水",
			showPrecipDesc: "降水確率とこれまでの降水量、および1時間ごとの降水確率を表示します。",
			showUv: "UV指数",
			showPressure: "気圧",
			showSun: "日の出と日の入り",
			showUpdated: "最終更新",
			hourlyCount: "表示する時間数",
			hourlyCountDesc: "1時間ごとの予報の帯に表示する時間数です。0にすると非表示になります。",
			dailyCount: "表示する日数",
			dailyCountDesc: "日ごとの予報に表示する日数です。0にすると非表示になります。",
			refresh: "自動更新（分）",
			refreshDesc: "予報を再取得する間隔です。0にすると開いたときだけ取得します。",
		},
		jira: {
			host: "Jiraのホスト",
			hostDesc: "JiraサイトのオリジンURLです。個人用アクセストークンを送信する場合はHTTPSが必要です。",
			hostPlaceholder: "https://jira.example.com",
			pat: "個人用アクセストークン",
			patDesc: "このカードで使うBearer形式のPATです。Hearthのプラグインデータに保存されます。",
			apiBase: "APIのベースパス",
			apiBaseDesc: "JiraのREST APIの相対パスです。完全なURLは受け付けません。",
			apiBasePlaceholder: "/rest/api/latest",
			savedFilter: "保存済みフィルター",
			savedFilterDesc: "Jiraのお気に入りフィルターを読み込んでから、1つ選びます。",
			selectedFilter: (name: string) => `選択中: ${name}`,
			loadFilters: "お気に入りフィルターを読み込む",
			chooseFilter: "フィルターを選択…",
			noFavoriteFilters: "Jiraからお気に入りフィルターが返されませんでした。",
			loadFailed: "Jiraのフィルターを読み込めませんでした。ホスト、APIパス、トークンを確認してください。",
			externalCallsDisabled:
				"Hearthの設定で外部通信が無効になっているため、お気に入りフィルターを読み込めません。",
			controls: "フィルターの操作",
			maxResults: "最大件数",
			maxResultsDesc: "絞り込んだ課題を表示する最大数です（上限200）。",
			refresh: "自動更新（分）",
			refreshDesc: "Jiraを更新する間隔です。0にすると、開いたときと手動で更新したときだけ更新します。",
			cache: "キャッシュの保持時間（分）",
			cacheDesc: "成功したJiraの応答をメモリに保持する時間です。0にするとキャッシュしません。",
		},
		leaf: {
			view: "埋め込むビュー",
			viewDesc:
				"コアプラグインやコミュニティプラグインが登録したサイドパネルのビューです" +
				"（カレンダー、アウトライン、タグペイン、カンバン…）。一覧は有効になっている" +
				"プラグインによって変わります。",
			pickPlaceholder: "ビューを選択…",
			none: "埋め込めるビューが見つかりません。サイドパネルのビューを提供するプラグインを有効にしてください。",
			file: "表示するファイル",
			fileDesc:
				"省略可能です。埋め込んだビューで保管庫内の特定のファイル（" +
				"Excalidrawの図面、キャンバス、ノートなど）を開きます。空欄にすると、ファイルなしで" +
				"ビューを埋め込みます（ビューによっては空白や「新規ファイル」の画面になります）。",
			filePlaceholder: "例: Drawings/Sketch.excalidraw.md",
			pickFile: "ファイルを選択",
			clearFile: "ファイルをクリア",
			hideHeader: "ビューのヘッダーを非表示",
			hideHeaderDesc:
				"埋め込んだビュー自身のヘッダー（パンくずリスト、戻る・進むの" +
				"矢印、メニュー）を非表示にします。カードで1つのファイルを表示するときに便利です。",
			perfLabel: "パフォーマンス",
			perfNote:
				"これはHearthで群を抜いて重いカードです。他の" +
				"プラグインのビュー全体をダッシュボード内でそのまま動かすため、ダッシュボードを開いている間ずっと、" +
				"そのプラグインのタイマー・リスナー・描画が動き続けます。" +
				"このカードを1枚増やすごとに、同じ負荷がかかります。使うのは多くても1〜2枚にして、" +
				"性能の低いマシンではダッシュボードが遅くなることを想定してください。",
			perfNoteTier:
				"パフォーマンスレベルを下げていますが、このカードは遅くなりません" +
				"（埋め込んだビューは自分で動作を管理するため）。ダッシュボードがまだ重いと感じるなら、" +
				"外す価値があるのはこのカードです。",
			note: "ベータ",
			noteDesc:
				"他のプラグインのビューをカード内に埋め込みます。サイドバーでの表示を前提とした" +
				"ビューは、ここでは表示やサイズがおかしくなることがあります。",
		},
		pet: {
			species: "動物",
			name: "名前",
			nameDesc: "ペットの呼び名です。空欄にすると動物の名前を使います。",
			colors: "色",
			colorsDesc:
				"体の色とアクセントの色です。輪郭、陰影、お腹の色は" +
				"体の色から決まります。",
			colorsReset: "この動物の色に戻す",
			size: "サイズ",
			sizeSmall: "小",
			sizeMedium: "中",
			sizeLarge: "大",
			metric: "エサにする活動",
			metricDesc: "ペットの機嫌が連動する保管庫のアクティビティです。",
			metricModified: "編集したノート",
			metricCreated: "作成したノート",
			moods: "機嫌",
			moodsDesc:
				"それぞれの機嫌になる基準です。ここで何を設定しても、ペットが病気になったり" +
				"いなくなったりすることはありません。保管庫に動きがなければ眠るだけで、何か書けば" +
				"すぐに目を覚まします。",
			moodsReset: "デフォルトの機嫌に戻す",
			excitedAt: "大喜びになる数",
			excitedAtDesc: "今日扱ったノートの数がこれ以上のとき。",
			happyAt: "ご機嫌になる数",
			happyAtDesc: "今日扱ったノートの数。あなたにとっての「良い日」です。",
			contentAt: "満足する数",
			contentAtDesc: "今日扱ったノートの数。これを下回るとペットは退屈します。",
			sleepyAfter: "眠るまでの時間",
			sleepyAfterDesc:
				"保管庫のどこにも動きがない時間（分）です。この時間が過ぎると、機嫌やその日の調子に関係なく" +
				"ペットは眠ります。何か動きがあれば、" +
				"その日の状態のまま再び目を覚まします。",
			pettedFor: "なでた効果の持続時間",
			pettedForDesc: "ペットをクリックしたあと、必ずご機嫌でいる時間（分）です。",
			nightSleep: "夜間",
			nightSleepDesc:
				"時刻による影響の設定です。深夜に活動が少ないのは時間帯のせいで、" +
				"放っておかれたからではありません。良い日は夜でも良い日として表示され、ここで何を設定しても、" +
				"なでればペットは目を覚まします。",
			nightOff: "何もしない（保管庫の動きだけで決まる）",
			nightQuiet: "退屈・満足のペットは代わりに眠る",
			nightAlways: "夜は常に眠る",
			nightWindow: "夜の時間帯",
			nightWindowDesc: "ローカル時刻です。日付をまたいでもかまいません。",
			eyesFollow: "目でポインターを追う",
			eyesFollowDesc: "眠っているペットは、ここでの設定に関係なく目を閉じたままです。",
			eyesOff: "追わない",
			eyesCard: "自分のカード上で",
			eyesBoard: "ダッシュボードのどこでも",
			showName: "名前を表示",
			showMood: "機嫌を表示",
			showActivity: "今日のアクティビティを表示",
		},
		vaultPet: {
			missing: "Vault Petがインストールされていません",
			missingDesc:
				"このカードはVault Petコミュニティプラグインを表示します。インストールして有効にすると、" +
				"カードに自動で表示されます。ここの設定はどちらの場合も保持されます。",
			display: "表示",
			displayDesc:
				"どちらもVault Pet独自のもので、ノートに挿入できる小さなカード、" +
				"またはペットハウスのビューです。サイドバーの代わりにここに表示します。",
			displayPet: "ペット",
			displayHouse: "ペットハウス",
			showHeader: "ハウスのタイトルバーを残す",
			showHeaderDesc:
				"カードにはすでにヘッダーがあるため、埋め込んだビュー自身のヘッダーは" +
				"デフォルトでは非表示です。",
			openButton: "「ペットハウスを開く」ボタン",
			openButtonDesc:
				"カードの隅に、Vault Petのハウスをサイドバーで開くボタンを表示します。" +
				"リボンアイコンと同じ動作です。",
		},
		design: {
			name: "デザイン",
			desc: "クラシック、またはMaterial 3 Expressive（アクセントカラーのトーンのコンテナ、ピル形、柔らかい形）です。",
			classic: "クラシック",
			expressive: "エクスプレッシブ",
			followDefault: (design: string) => `デフォルト（${design}）`,
		},
		colors: {
			heading: "色",
			headingDesc: "このカードのアクセントカラーと背景の色合いです。",
			clearAccent: "アクセントカラーをクリア",
			clearBackground: "背景をクリア",
			cardOpacity: "カードの不透明度",
			cardOpacityDesc:
				"カードの面を透明にします（ダッシュボードのデフォルトより優先されます）。",
			cardBlur: "カードのぼかし",
			cardBlurDesc:
				"このカードの背後にすりガラス風のぼかしをかけます（ダッシュボードのデフォルトより優先されます）。不透明度を100%未満にする必要があります。",
			cardBorderWidth: "カードの枠線",
			cardBorderWidthDesc:
				"このカードの枠線の太さです（ダッシュボードのデフォルトより優先されます）。0にすると枠線とタイトル下の線がなくなります。",
			useDashboardDefault: "ダッシュボードのデフォルトを使用",
		},
		size: {
			heading: "サイズ",
			headingDesc:
				"幅（ダッシュボードに対する%）と高さ（ピクセル）です。カードの端や角をドラッグしても変更できます。",
			widthAria: "ダッシュボードに対する幅（%）",
			heightAria: "高さ（ピクセル）",
		},
		pin: {
			heading: "すべてのダッシュボードにピン留め",
			headingDesc:
				"このカードをすべてのダッシュボードに表示します。定義と位置は共有されます。",
		},
		copy: {
			heading: "ダッシュボードにコピー",
			headingDesc:
				"このカードの複製を、別のダッシュボードの末尾に追加します。",
			copy: "コピー",
			copyTooltip: "このカードを選択したダッシュボードにコピー",
		},
	},

	// ---- Card bodies (rendered content) --------------------------------
	cards: {
		empty: {
			searchNoQuery: "カードの設定でクエリを設定してください",
			searchNoMatches: "一致するものはありません",
			embedPickFile: "設定で埋め込むファイルを選んでください",
			embedSectionMissing: (section: string) => `セクションが見つかりません：${section}`,
			slideshowEmpty: "カードの設定で画像を追加してください",
			slideshowFolderEmpty: "このフォルダには画像がありません",
			embedEnableBases: ".baseファイルを埋め込むには、コアプラグインの「ベース」を有効にしてください",
			embedEnableCanvas: "キャンバスを埋め込むには、コアプラグインの「キャンバス」を有効にしてください",
			embedInstallExcalidraw: "図面を埋め込むには、Excalidrawプラグインをインストールしてください",
			dailyEnable: "コアプラグインの「デイリーノート」を有効にしてください",
			periodicInstall: "Periodic Notesプラグインをインストールしてください",
			journalsInstall: "Journalsプラグインをインストールしてください",
			scheduleNoSources:
				"コアプラグインの「デイリーノート」を有効にするか、このカードの設定でカレンダーを購読してください",
			webNoUrl: "設定でWebページのURLを設定してください",
			bookmarksEnable: "コアプラグインの「ブックマーク」を有効にしてください",
			bookmarksEmpty: "ブックマークはまだありません",
			favoritesEmpty: "設定でお気に入りを追加してください",
			recentEmpty: "最近のファイルはありません",
			folderEmpty: "このフォルダは空です",
			folderMissing: (path: string) =>
				path ? `「${path}」にフォルダがありません` : "カードの設定でフォルダを選んでください",
			linksEmpty: "設定でリンクを追加してください",
			templaterEnable: "テンプレートからノートを作成するには、Templaterプラグインを有効にしてください",
			templaterEmpty: "カードの設定でテンプレートを追加してください",
			tasksEnable:
				"TaskNotesプラグインを有効にするか、ソースをチェックボックスに切り替えてください",
			tasksEmpty: "未完了のタスクはありません",
			tasksNoMatch: "フィルターに一致するタスクはありません",
			matrixNeedsPriorities:
				"マトリクスはタスクを優先度で振り分けます。優先度を読み取れるよう、" +
				"このカードの設定で「日付と優先度」をオンにしてください。",
			kanbanNoBoard:
				"Kanbanボードが見つかりません。カードの設定でボードのノートを選ぶか、Kanbanプラグインでボードを作成してください",
			dataviewEnable: "クエリを実行するには、Dataviewプラグインを有効にしてください",
			dataviewNoQuery: "カードの設定でDataviewクエリを設定してください",
			datacoreEnable: "クエリを実行するには、Datacoreプラグインを有効にしてください",
			datacoreNoQuery: "カードの設定でDatacoreクエリを設定してください",
			datacoreBadQuery: "Datacoreがこのクエリを読み取れませんでした",
			datacoreOneQuery:
				"1つのカードで実行できるクエリは1つだけですが、複数のクエリが含まれているようです。使いたいクエリだけを残し、その後ろにはコメントを書かないでください。",
			datacoreFailed: "Datacoreがこのカードを実行できませんでした",
			gitEnable: "保管庫のリポジトリを管理するには、Gitプラグインを有効にしてください",
			gitNotReady: "まだリポジトリが開かれていません。Gitプラグインで設定してください",
			rssNoSources: "カードの設定でフィードを追加してください",
			weatherNoLocation: "カードの設定で場所を選んでください",
			marketNoSymbols: "カードの設定で株式・ファンド・通貨・暗号資産を追加してください",
			renderFailed: "このカードを描画できませんでした。詳しくはコンソールを確認してください",
			leafPickView: "カードの設定でプラグインのビューを選んでください",
			boardPickView: "ダッシュボードの設定で、このダッシュボードに表示するビューを選んでください",
			boardPickCard: "このダッシュボードにはまだカードがありません。カードを追加してください",
			boardNeedsFile: "ダッシュボードの設定で、このダッシュボードに表示するファイルを選んでください",
			leafViewMissing:
				"このビューは利用できません。ビューを提供するプラグインを有効にしてください",
			vaultPetInstall: "ここでペットを飼うには、Vault Petプラグインをインストールしてください",
			vaultPetNoHouse:
				"Vault Petのペットハウスを利用できません。プラグインを有効にするか、更新してください",
			operonEnable: "タスクを表示するには、Operonプラグインを有効にしてください",
			operonDisabled:
				"Operon連携がオフです。設定 → Hearth → 連携 でオンにしてください",
			operonUnsupported:
				"OperonのDeveloper APIはデスクトップ専用で、Obsidian 1.12.2以降が必要です",
			operonPending:
				"設定 → Operon → Core → General → Developer API Integrations でHearthを承認してください",
			operonSuspended:
				"OperonがHearthのアクセスを一時停止しました。OperonのDeveloper API Integrationsで確認してください",
			operonRevoked:
				"Operonへのアクセスが取り消されました。OperonのDeveloper API Integrationsで再度許可してください",
			operonBooting: "Operonはまだ起動中です",
			operonError: "Operonが接続を拒否しました",
			operonNoTasks: "一致するOperonのタスクはありません",
			operonNoAgenda: "この期間に予定されているものはありません",
			operonNoColumns: "表示するOperonのステータスがありません。カードの設定でパイプラインを選んでください",
		},
		folder: {
			browse: "このフォルダを閲覧",
			/** The card's last row: what it isn't showing. */
			more: (n: number) => `ほか${n}件…`,
			missing: "このフォルダは保管庫にもうありません。",
			/** The path row's back arrow, and the vault's own name in it. */
			up: (name: string) => `${name}に戻る`,
			vaultRoot: "保管庫のルート",
			/** The browser's own controls, beside the breadcrumb. */
			showList: "リストで表示",
			showTiles: "タイルで表示",
			openInTab: "新規タブで開く",
			/** Folding a subfolder's section in the browser, one or all of them. */
			collapse: (name: string) => `${name}を折りたたむ`,
			expand: (name: string) => `${name}を展開`,
			collapseAll: "すべてのフォルダを折りたたむ",
			expandAll: "すべてのフォルダを展開",
		},
		operon: {
			loading: "Operonを読み込み中…",
			untitled: "無題のタスク",
			settling: "Operonはまだ準備中です",
			timerIdle: "実行中のタイマーはありません",
			timerStarting: "開始中…",
			timerStopping: "停止中…",
			timerUnassigned: "未割り当ての時間",
			truncated: (shown: number, total: number) => `${total}件中${shown}件を表示`,
			readFailed: (reason: string) => `Operonから応答を得られませんでした：${reason}`,
			/** Operon's own words, shown verbatim under an empty state so the
			 * problem is diagnosable instead of guessed at. */
			errorDetail: (code: string, reason: string) => (reason ? `${code} — ${reason}` : code),
			addTask: "タスクを追加",
			moveTo: "移動先",
			targetDaily: "Operonは、新しいインラインタスクを今日のデイリーノートに追加するよう設定されています。",
			targetFile: (path: string) => `Operonは、新しいインラインタスクを${path}に追加するよう設定されています。`,
			targetActive: "Operonは、新しいインラインタスクをアクティブなファイルに追加するよう設定されています。",
			targetAsk:
				"Operonは、新しいインラインタスクの追加先を毎回確認するよう設定されていますが、ダッシュボードの" +
				"カードからは答えられません。このカードでは代わりに「独立したノート」を選んでください。",
			targetNote: (folder: string) =>
				folder
					? `Operonは、新しいタスクを${folder}にノートとして作成するよう設定されています。`
					: "Operonは、新しいタスクをそれぞれ独立したノートとして作成するよう設定されています。",
			addTaskPlaceholder: "何をしますか？",
			addTaskDue: "期限",
			confirmTitle: "Operonが確認を求めています",
			/** Operon assessed the change and asked for consent; its own summary
			 * of what would happen is shown rather than Hearth's guess at it. */
			confirmMessage: (risk: string, effects: string) =>
				effects
					? `Operonはこの変更を「${risk}」と評価しました：${effects}`
					: `Operonはこの変更を「${risk}」と評価しました。`,
			confirmApply: "適用",
		},
		templater: {
			untitledTile: "新規ノート",
			vaultRoot: "デフォルトの場所",
			untitledNote: "無題",
			createsIn: (destination: string) => `作成先：${destination}`,
			promptTitle: "新しいノートの名前",
			promptPlaceholder: "何についてのノートですか？",
		},
		pet: {
			species: {
				cat: "ネコ",
				dog: "イヌ",
				bird: "小鳥",
				fox: "キツネ",
				frog: "カエル",
				blob: "スライム",
			},
			moodExcited: "大喜びではしゃぎ中",
			moodHappy: "ごきげん",
			moodContent: "満足そう",
			moodBored: "ちょっと退屈",
			moodSleepy: "ぐっすり眠り中",
			moodNight: "夜なのでおやすみ中",
			petHint: "クリックしてなでる",
			todayCount: (count: number, metric: "modified" | "created") =>
				metric === "created"
					? `今日の新規ノート${count}件`
					: `今日のノート${count}件`,
			streak: (days: number) => `${days}日連続`,
		},
		vaultPet: {
			openHouse: "ペットハウスを開く",
		},
		embed: {
			openFile: "このファイルを開く",
			editHint: "ダブルクリックで編集",
			emptyNotePlaceholder: "空のノート…",
			emptyNoteHint: "空のノート（ダブルクリックで編集）",
		},
		slideshow: {
			previous: "前の画像",
			next: "次の画像",
			pause: "スライドショーを一時停止",
			play: "スライドショーを再開",
			openImage: "この画像を開く",
			jump: "画像に移動",
		},
		text: {
			placeholder: "メモを書き留める…",
		},
		calculator: {
			placeholder: "2 + 2、10 km to miles、10 € to USD…",
		},
		rss: {
			allTab: "すべて",
			untitled: "（無題）",
			loading: "フィードを読み込み中…",
			empty: "このフィードには記事がありません",
			error: "このフィードを読み込めませんでした",
			disabled: "フィードはオフです（外部通信が無効）",
			refresh: "更新",
			nothingToOpen: "この記事には開けるリンクやテキストがありません。",
			allFeeds: "すべてのフィード",
			allRead: "すべて既読です",
			unreadOnly: "未読のみ表示",
			showAll: "すべての記事を表示",
			markAllRead: "すべて既読にする",
			markRead: "既読にする",
			markUnread: "未読にする",
			readHere: "Hearthで読む",
			openTab: "新規タブで読む",
			openBrowser: "ブラウザで開く",
			saveNote: "ノートとして保存",
			openNote: "保存したノートを開く",
			copyLink: "リンクをコピー",
			linkCopied: "リンクをコピーしました",
			reader: {
				title: "リーダー",
				gone: "このフィードカードはもう存在しません。",
				noItems: "読むものはありません。",
				toggleList: "リストの表示／非表示",
				prevFeed: "前のフィード",
				nextFeed: "次のフィード",
				popOut: "タブで開く",
				prev: "前へ",
				next: "次へ",
				position: (at: number, of: number) => `${at} / ${of}`,
				keys: "← → 記事 · [ ] フィード · o 開く · s 保存 · u 未読 · i 画像 · l リスト",
				imagesBlocked: (n: number) => `${n}枚の画像を読み込んでいません。`,
				loadImages: "画像を読み込む",
				noteSaved: (path: string) => `${path}として保存しました`,
				noteFailed: "ノートを作成できませんでした。",
			},
		},
		market: {
			types: {
				equity: "株式",
				etf: "ETF",
				fund: "ファンド",
				index: "指数",
				currency: "通貨",
				crypto: "暗号資産",
				future: "先物",
				other: "",
			},
			states: {
				open: "取引中",
				pre: "プレマーケット",
				post: "時間外",
				closed: "取引終了",
			},
			/** The range switcher's chips — keep them short. */
			ranges: {
				"1d": "1日",
				"5d": "5日",
				"1mo": "1か月",
				"6mo": "6か月",
				"1y": "1年",
				"5y": "5年",
			},
			rangeNames: {
				"1d": "1日",
				"5d": "5日間",
				"1mo": "1か月",
				"6mo": "6か月",
				"1y": "1年",
				"5y": "5年",
			},
			sources: {
				yahoo: "Yahoo Finance",
				tencent: "Tencent",
				eastmoney: "Eastmoney",
				coingecko: "CoinGecko",
				frankfurter: "ECB（Frankfurter）",
			},
			updated: (time: string) => `${time}に更新`,
			loadingShort: "読み込み中…",
			unavailable: "利用できません",
			disabled: "外部通信がオフのため、相場を取得できません",
			noChart: "この期間のチャートはありません",
			dayRange: "当日の値幅",
			yearRange: "52週の値幅",
			open: "始値",
			prevClose: "前日終値",
			volume: "出来高",
			currency: "通貨",
			source: "データ元",
			asOf: "時点",
			totalValue: "評価額合計",
			noHoldings: "カードの設定で保有数量を設定してください",
			today: "今日",
			totalGain: "合計",
			notConverted: (n: number) =>
				`${n}件の保有銘柄を除外しました（通貨の為替レートがありません）`,
			units: (n: number) => `保有数${n.toLocaleString()}`,
			position: "保有状況",
			unitsLabel: "数量",
			value: "評価額",
			avgCost: "平均取得単価",
			costBasis: "取得額",
			openInBrowser: "ブラウザで開く",
			refresh: "更新",
			searchPlaceholder: "株式・ファンド・通貨・暗号資産を検索",
			searchDisabled: "外部通信が無効のため、検索はオフです",
			searching: "検索中…",
			noResults: "見つかりませんでした",
			lookupHint: "上の欄で検索してください。名前、ティッカー、ファンドコード、通貨ペアなど何でも検索でき、ワンクリックで追加できます。",
			back: "戻る",
			addToCard: "カードに追加",
			onCard: "カードに追加済み",
			added: (name: string) => `${name}を追加しました`,
		},
		tension: {
			title: "世界の緊張度",
			bands: {
				cool: "平穏",
				mild: "穏やか",
				warm: "やや緊迫",
				hot: "緊迫",
				burning: "極度に緊迫",
			},
			loading: "ニュースを読み込み中…",
			error: "世界の緊張度指数を読み込めませんでした",
			disabled: "世界の緊張度はオフです（外部通信が無効）",
			none: "現在、Kagiは世界の緊張度指数を公開していません",
			open: "Kagi Newsで世界の緊張度指数を開く",
			aria: (score: number, band: string) => `世界の緊張度：${score}/100（${band}）`,
			source: "AIによる評価 · Kagi News",
			updated: (when: string) => `${when}に更新`,
			historyTip: (days: number, lo: number, hi: number) => `過去${days}日間：${lo}–${hi}`,
			changeTip: "前日からの変化",
		},
		weather: {
			loading: "予報を読み込み中…",
			error: "予報を読み込めませんでした",
			disabled: "天気はオフです（外部通信が無効）",
			now: "現在",
			todayLabel: "今日",
			feelsLike: (temp: string) => `体感${temp}`,
			highLow: (high: string, low: string) => `最高${high} · 最低${low}`,
			updated: (time: string) => `${time}に更新`,
			humidity: "湿度",
			wind: "風",
			precip: "降水量",
			uv: "UV",
			pressure: "気圧",
			sunrise: "日の出",
			sunset: "日の入り",
			/** Compass points, clockwise from north. Indexed by the bearing's
			 * eighth — keep all eight, in this order. */
			compass: ["北", "北東", "東", "南東", "南", "南西", "西", "北西"],
			/** A span of time: "3 h 12 min", or just "40 min" under an hour. */
			duration: (h: number, m: number) => (h ? `${h}時間${m}分` : `${m}分`),
			/** The moon style, and the moon's line in the full forecast. */
			moon: {
				label: "月",
				/** One per phase; see `moonPhaseKey`. */
				phases: {
					new: "新月",
					waxingCrescent: "三日月",
					firstQuarter: "上弦の月",
					waxingGibbous: "十三夜月",
					full: "満月",
					waningGibbous: "寝待月",
					lastQuarter: "下弦の月",
					waningCrescent: "有明月",
				},
				illuminated: (percent: string) => `輝面比${percent}`,
				age: (days: number) => `月齢${days}日目（29日周期）`,
				nextFull: "満月",
				nextNew: "新月",
				moonrise: "月の出",
				moonset: "月の入り",
				inDays: (days: number) =>
					days <= 0 ? "今日" : days === 1 ? "明日" : `${days}日後`,
				cycle: "月の満ち欠けの周期における今夜の位置",
			},
			/** The daylight style: the sun on its arc. */
			daylight: {
				until: (span: string) => `あと${span}`,
				dayLength: (span: string) => `昼の長さ${span}`,
				polarDay: "今日は太陽が沈みません",
				polarNight: "今日は太陽が昇りません",
				arc: "日の出から日の入りまでの太陽の軌道",
			},
			/** The full-forecast dialog a weather card opens when it is clicked:
			 * every reading the response carries, whatever the card shows. */
			detail: {
				title: "予報",
				open: "詳しい予報を開く",
				now: "現在",
				days: "今後1週間",
				hoursFor: (day: string) => `1時間ごと · ${day}`,
				selectDay: (day: string) => `${day}の1時間ごとの予報を表示`,
				noHours: "この日の残りの時間帯はありません",
				refresh: "更新",
				source: "Open-Meteo",
				feelsLikeLabel: "体感温度",
				gust: "突風",
				cloudCover: "雲量",
				precipChance: "降水確率",
				precipHour: "この1時間の降水量",
				precipTotal: "総降水量",
				windMax: "最大風速",
				uvMax: "最大UV",
				columnTime: "時刻",
				columnCondition: "天気",
				columnTemp: "気温",
				columnFeels: "体感",
				columnPrecip: "降水",
				columnWind: "風",
				columnHumidity: "湿度",
				columnUv: "UV",
			},
			/** One per WMO weather code group; see `weatherLabelKey`. */
			conditions: {
				clear: "快晴",
				mainlyClear: "おおむね晴れ",
				partlyCloudy: "一部曇り",
				overcast: "曇り",
				fog: "霧",
				rimeFog: "着氷性の霧",
				drizzle: "霧雨",
				freezingDrizzle: "着氷性の霧雨",
				rain: "雨",
				heavyRain: "大雨",
				freezingRain: "着氷性の雨",
				showers: "にわか雨",
				snow: "雪",
				heavySnow: "大雪",
				snowGrains: "霧雪",
				snowShowers: "にわか雪",
				thunderstorm: "雷雨",
				thunderstormHail: "雷雨（ひょうを伴う）",
				unknown: "不明",
			},
		},
		jira: {
			controls: {
				status: "ステータス",
				assignee: "担当者",
				priority: "優先度",
				issueType: "課題タイプ",
				sprint: "スプリント",
				fixVersion: "修正バージョン",
			},
			controlCount: (label: string, count: number) => `${label}（${count}）`,
			searchPlaceholder: "選択肢を検索…",
			searchAria: (label: string) => `${label}の選択肢を検索`,
			noOptions: "選択肢がありません",
			noMatchingOptions: "一致する選択肢がありません",
			refresh: "Jiraの課題を更新",
			loading: "Jiraの課題を読み込み中…",
			error: "Jiraの課題を読み込めませんでした",
			empty: "これらのフィルターに一致する課題はありません",
			disabled: "Jiraはオフです（外部通信が無効）",
			notConfigured: "カードの設定で、Jiraのホスト、トークン、保存済みフィルターを設定してください",
		},
		git: {
			sections: {
				status: "リポジトリの状態",
				actions: "ボタン",
				changes: "変更されたファイル",
				log: "最近のコミット",
			},
			actions: {
				commitAndSync: "コミットして同期",
				commit: "コミット",
				push: "プッシュ",
				pull: "プル",
				fetch: "フェッチ",
				stageAll: "すべてステージ",
				unstageAll: "すべてステージ解除",
				discardAll: "すべての変更を破棄",
				switchBranch: "ブランチを切り替え",
				sourceControl: "ソース管理を開く",
				history: "履歴を開く",
			},
			refresh: "リポジトリを再読み込み",
			noBranch: "ブランチなし",
			noUpstream: "上流ブランチなし",
			staged: "ステージ済み",
			unstaged: "未ステージの変更",
			conflicted: "競合",
			unpushed: "未プッシュのコミット",
			clean: "すべてコミット済みです",
			noChanges: "変更はありません",
			noCommits: "まだコミットがありません",
			noMessage: "（メッセージなし）",
			lastCommit: (when: string) => `最終コミット：${when}`,
			more: (count: number) => `ほか${count}件…`,
			openSourceControl: "ソース管理を開く",
			openHistory: "履歴を開く",
			openDiff: "差分を開く",
			stageFile: "ステージ",
			unstageFile: "ステージ解除",
			discardFile: "変更を破棄",
			confirmTitle: "変更を破棄しますか？",
			confirmDiscard:
				"保管庫内の未コミットの変更がすべて破棄されます。この操作は元に戻せません。",
			confirmDiscardFile: (name: string) =>
				`「${name}」への未コミットの変更が破棄されます。この操作は元に戻せません。`,
			confirmDiscardButton: "破棄",
			unsupported: "このバージョンのGitプラグインはこの操作に対応していません",
		},
		daily: {
			createToday: "今日のノートを作成",
			openToday: "今日のノートを開く",
			noNoteYet: "今日のノートはまだありません",
		},
		periodic: {
			/** The current period, as it reads inside the sentences below. */
			period: {
				day: "今日",
				week: "今週",
				month: "今月",
				quarter: "今四半期",
				year: "今年",
			},
			noNoteYet: (period: string) => `${period}のノートはまだありません`,
			create: (period: string) => `${period}のノートを作成`,
			open: (period: string) => `${period}のノートを開く`,
			notEnabled: (granularity: string) =>
				`Periodic Notesで${granularity}のノートを有効にしてください`,
			loading: "ジャーナルのノートを検索中…",
			pickJournal: "このカードの設定でジャーナルを選んでください",
			noSuchJournal: (journal: string) => `「${journal}」という名前のジャーナルはありません`,
			noJournalNoteYet: (journal: string) => `${journal}にはまだ現在のノートがありません`,
			createJournalNote: "作成する",
			openJournalNote: (journal: string) => `${journal}の現在のノートを開く`,
		},
		heatmap: {
			less: "少ない",
			more: "多い",
			unitModified: "件のノートを編集",
			unitCreated: "件のノートを作成",
			unitNotes: "件のノート",
			dayValue: (date: string, value: string, unit: string) => `${date}：${value}${unit}`,
		},
		calendar: {
			previousMonth: "前の月",
			nextMonth: "次の月",
			backToToday: "今日に戻る",
			dayEdited: (date: string, count: number) => `${date}：${count}件編集`,
			dayTasks: (date: string, count: number) =>
				`${date}：タスク${count}件`,
			dayMetric: (date: string, count: number, metric: string) =>
				`${date}：${count}件${metric === "created" ? "作成" : metric === "modified" ? "編集" : metric}`,
			dayEvents: (date: string, count: number) =>
				`${date}：予定${count}件`,
			agendaNoNote: "ノートなし",
			allDay: "終日",
			untitledEvent: "（タイトルなし）",
			openDailyNote: "デイリーノートを開く",
			createDailyNote: "デイリーノートを作成",
			eventsHeading: "予定",
			eventNotes: "ノート",
			createEventNote: "ノートを作成",
			openEventNote: "ノートを開く",
			taskNotesSource: "TaskNotes",
			checkboxSource: "タスク",
			taskDue: "期限",
			taskTimeblock: "タイムブロック",
			taskComplete: "完了にする",
			taskReopen: "未完了に戻す",
			taskEstimate: (minutes: number) =>
				minutes >= 60
					? `${Math.floor(minutes / 60)}時間${minutes % 60 ? `${minutes % 60}分` : ""}`
					: `${minutes}分`,
			openTaskLine: "ノート内で開く",
			openTaskNote: "タスクを開く",
		},
		schedule: {
			previous: "前へ",
			next: "次へ",
			today: "今日",
			views: {
				month: "月",
				week: "週",
				day: "日",
				list: "リスト",
			},
			more: (count: number) => `+${count}件`,
			listEmpty: (days: number) => `今後${days}日間の予定はありません`,
		},
		stats: {
			notes: "ノート",
			attachments: "添付ファイル",
			folders: "フォルダ",
			tags: "タグ",
			dayStreak: "連続日数",
			daysUsing: "Obsidianの利用日数",
		},
		web: {
			openInBrowser: "ブラウザで開く",
			mayRefuse: "このサイトは埋め込みを拒否する場合があります。",
		},
		bookmarks: {
			untitled: "無題",
			needsSearch: "保存した検索を開くには、コアプラグインの「検索」を有効にしてください",
			needsGraph: "保存したグラフを開くには、コアプラグインの「グラフビュー」を有効にしてください",
		},
		tasks: {
			createNewTask: "新しいタスクを作成",
			toDo: "未着手",
			done: "完了",
			statusInProgress: "進行中",
			noStatus: "ステータスなし",
			hideColumn: (label: string) => `「${label}」列を非表示`,
			markOccurrence: "今日の分を完了にする",
			recurring: "繰り返し",
			addCard: "カードを追加",
			addCardPlaceholder: "カードのテキスト…",
			createAsNote: "ノートとして作成",
			noteBody: "ノートの本文",
			convertToNote: "ノートに変換",
			editMetadata: "日付と優先度を編集",
			deleteCard: "カードを削除",
			openNote: "ノートを開く",
			deleteTask: "タスクを削除",
			deleteTaskConfirm: "このタスクを削除しますか？ノートからも削除されます。",
			noMetadata: "日付や優先度は設定されていません。",
			save: "保存",
			cancel: "キャンセル",
			setDoneColumn: (label: string) => `「${label}」を完了列にする`,
			unsetDoneColumn: (label: string) =>
				`「${label}」でカードを自動的に完了にしない`,
			dueDate: "期限",
			startDate: "開始日",
			scheduledDate: "予定日",
			doneDate: "完了日",
			recurrenceLabel: "繰り返し",
			recurrenceNever: "しない",
			recurrenceEvery: "間隔",
			recurrenceInterval: "繰り返しの間隔",
			recurrenceUnits: {
				day: "毎日",
				week: "毎週",
				month: "毎月",
				year: "毎年",
			},
			taskCount: (n: number) => `タスク${n}件`,
			description: "説明",
			descriptionPlaceholder: "1行につき1項目の箇条書き。**太字**、[[リンク]]、#タグが使えます",
			descHelp: {
				summary: "ここで使える書式は？",
				intro:
					"各行がタスクの下の箇条書き1項目になり、空行は除かれます。" +
					"インラインの書式は残りますが、独立したブロックが必要な書式は残りません。",
				works: "使える",
				fails: "使えない",
				worksItems: [
					["**太字**", "太字"],
					["*斜体*", "斜体"],
					["~~取り消し~~", "取り消し線"],
					["==マーカー==", "ハイライト"],
					["`コード`", "インラインコード"],
					["[[ノート]]", "ノートへのリンク"],
					["[サイト](https://example.com)", "Webリンク"],
					["#タグ", "タグ"],
				],
				failsItems: [
					["# 見出し", "見出し"],
					["- [ ] 手順", "チェックボックス（サブタスクになります）"],
					["> 引用", "引用"],
					["```", "コードブロック"],
					["| a | b |", "表"],
					["![[image.png]]", "埋め込みと画像"],
					["  入れ子", "インデント（行はすべて同じ階層になります）"],
				],
				issues: {
					heading: "見出しは保持されず、#で始まるテキストとして表示されます。",
					checkbox: "チェックボックスがあると、この行は説明の一部ではなくサブタスクになります。",
					quote: "引用は保持されず、>で始まるテキストとして表示されます。",
					codeblock: "コードブロックは保持されず、各行がそれぞれ箇条書きになります。",
					table: "表は保持されず、各行がそれぞれ箇条書きになります。",
					rule: "区切り線はただのハイフンとして表示されます。",
					embed: "埋め込みは、画像やノートではなくリンクのテキストとして表示されます。",
					indent: "インデントは削除され、すべての行が同じ階層になります。",
				},
				issueLine: (line: number, message: string) => `${line}行目：${message}`,
				moreIssues: (n: number) => `…ほか${n}件`,
			},
			createNote: "ノートを作成",
			createNoteSaveFirst: "先に変更を保存してください。ノートを作成すると、タスクがファイルの内容で書き換えられます。",
			createNoteDefaultFolder: "デフォルトのフォルダ",
			createNoteTooltip: (folder: string) => `このタスクを${folder}内のノートにして、ここにリンクします`,
			createNoteTooltipTemplate: (folder: string, template: string) =>
				`このタスクを${template}から${folder}内のノートにして、ここにリンクします`,
			matrix: {
				do: "実行",
				schedule: "計画",
				delegate: "委任",
				eliminate: "排除",
				urgent: "緊急",
				notUrgent: "緊急でない",
				important: "重要",
				notImportant: "重要でない",
				unsorted: "未分類",
				unsortedHint: "優先度がどの象限にも当てはまりません。マトリクスにドラッグしてください",
				empty: "ここにタスクをドロップ",
				moveTo: (quadrant: string) => `「${quadrant}」へ移動`,
				renameHint: "ダブルクリックで名前を変更",
			},
			tags: "タグ",
			tagsPlaceholder: "#仕事 #家/用事",
			renameColumnHint: "ダブルクリックで名前を変更",
			editTitle: "タイトルを編集",
			editTitleHint: "ダブルクリックで編集",
			titlePlaceholder: "カードのタイトル…",
			priority: "優先度",
			priorityNone: "優先度なし",
			priorityHighest: "優先度：最高",
			priorityHigh: "優先度：高",
			priorityMedium: "優先度：中",
			priorityLow: "優先度：低",
			priorityLowest: "優先度：最低",
			sort: "並べ替え",
			sortReverse: "逆順",
			sortLabels: {
				smart: "スマート",
				due: "期限",
				priority: "優先度",
				created: "作成日時",
				alpha: "名前順",
			},
			sortCustom: "カスタム",
			sortCustomOption: "カスタム並べ替え…",
			sortTitle: "カスタム並べ替え",
			sortHint:
				"以下のルールを上から順に使ってタスクを並べ替えます。最初のルールが主な基準になり、以降のルールは同順位のときに使われます。",
			sortFields: {
				due: "期限",
				scheduled: "予定日",
				priority: "優先度",
				created: "作成日時",
				alpha: "名前順",
				status: "ステータス",
			},
			sortAscending: "昇順",
			sortDescending: "降順",
			sortLevelFirst: "並べ替えの基準",
			sortLevelNext: "次の基準",
			sortAddRule: "ルールを追加",
			sortRemoveRule: "ルールを削除",
			sortMoveUp: "上へ移動",
			sortMoveDown: "下へ移動",
			sortEmpty: "ルールはまだありません。ルールを追加しない場合は、デフォルトのスマート並べ替えが使われます。",
			filter: "フィルター",
			filterTitle: "タスクを絞り込む",
			filterPresets: {
				overdue: "期限切れ",
				today: "今日",
				week: "今週",
				highPriority: "優先度：高",
				noDate: "日付なし",
			},
			filterDue: "日付",
			filterDueDesc: "タスクの期限または予定日で絞り込みます。",
			filterDueAny: "すべて",
			filterDueHasDate: "日付あり",
			filterPriority: "優先度",
			filterPriorityLevels: {
				high: "高",
				medium: "中",
				low: "低",
				none: "なし",
			},
			filterStatus: "ステータス",
			filterContexts: "コンテキスト",
			filterProjects: "プロジェクト",
			filterTags: "タグ",
			filterText: "テキストを含む",
			filterTextPlaceholder: "タスクのテキストを検索…",
			filterApply: "適用",
			filterClear: "クリア",
			valueChange: "値を変更",
			dateTitle: "日付を設定",
			dateOn: "日付",
			dateToday: "今日",
			dateTomorrow: "明日",
			dateNextWeek: "来週",
			dateClear: "日付をクリア",
			valueCustom: "その他の値…",
			valueCustomTitle: "値を設定",
			valueClear: "値をクリア",
		},
	},

	// ---- Relative dates (tasks card) -----------------------------------
	dates: {
		today: "今日",
		tomorrow: "明日",
		yesterday: "昨日",
		daysAgo: (n: number) => `${n}日前`,
		nextWeekday: (weekday: string) => `来週の${weekday}`,
		lastWeekday: (weekday: string) => `先週の${weekday}`,
	},

	// ---- Recurrence rule labels (tasks card) ---------------------------
	recurrence: {
		repeats: "繰り返し",
		units: {
			day: "日",
			week: "週",
			month: "月",
			year: "年",
		},
		everyOne: (unit: string) => `毎${unit}繰り返し`,
		everyMany: (count: number, unit: string) =>
			`${count}${unit === "月" ? "か月" : unit === "週" ? "週間" : unit}ごとに繰り返し`,
	},

	// ---- Clock greetings -----------------------------------------------
	clock: {
		greetingMorning: "おはようございます",
		greetingAfternoon: "こんにちは",
		greetingEvening: "こんばんは",
		// One array per time-of-day bucket (see greetingBucket in cards.ts):
		// late night, early morning, morning, afternoon, evening, late evening.
		playfulGreetings: [
			[
				"深夜の作業タイム？",
				"夜遅くまでがんばってる？",
				"保管庫は眠らない、ってこと？",
				"そろそろ寝たほうがいいんじゃない？",
			],
			[
				"こんなに早くからもう作業？",
				"お日さまと一緒に起きたの？",
				"まずはコーヒーでしょ？",
				"この時間に起きてるなんて、やるね。",
			],
			[
				"おはよう。今日も生産的なふりをしよう。",
				"ノートたちが待ってたよ。",
				"さあ、再開しよう。",
				"今日も一日、保管庫とともに。",
			],
			[
				"午後もひと踏ん張り。",
				"まだ続ける？",
				"昼食後に生産性を求めるとは、意欲的だね。",
				"たぶん、折り返し地点。",
			],
			[
				"また来たの？",
				"こんばんは。締めくくり？それともこれから？",
				"あと1ノートだけ？",
				"一日は終わりに向かってるのに、きみは止まらないね。",
			],
			[
				"今日も遅くまで？",
				"一日は終わっても、アイデアは終わらない。",
				"そろそろ休んだら？",
				"ちょっと無理しすぎじゃない？",
			],
		] as string[][],
	},

	// ---- Card templates (Add card menu) --------------------------------
	templates: {
		note: "埋め込みノート",
		image: "埋め込み画像",
		slideshow: "スライドショー",
		base: "埋め込みベース",
		excalidraw: "Excalidrawの図面",
		canvas: "埋め込みキャンバス",
		daily: "デイリーノート（今日）",
		periodic: "定期ノート",
		journal: "ジャーナルノート",
		web: "Webページ（iframe）",
		bookmarks: "ブックマーク",
		favorites: "お気に入り",
		recent: "最近のファイル",
		folder: "フォルダ",
		links: "リンク / ランチパッド",
		templater: "テンプレートから新規ノート",
		clock: "時計とあいさつ",
		tasks: "タスク",
		calendar: "ミニカレンダー",
		schedule: "カレンダー",
		stats: "保管庫の統計",
		search: "クエリ",
		searchbar: "検索バー",
		heatmap: "アクティビティヒートマップ",
		text: "テキスト / メモ",
		calculator: "電卓",
		dataview: "Dataviewクエリ",
		datacore: "Datacoreクエリ",
		rss: "RSSフィード",
		jira: "Jiraフィルター",
		weather: "天気",
		market: "マーケット",
		tension: "世界の緊張度",
		git: "Git",
		"operon-tasks": "Operonのタスク",
		"operon-board": "Operonのボード",
		"operon-agenda": "Operonのアジェンダ",
		"operon-timer": "Operonのタイマー",
		leaf: "プラグインビュー（ベータ）",
		pet: "ペット",
		"vault-pet": "Vault Pet",
		"vault-pet-house": "Vault Petのペットハウス",
	},

	/** One line per template, shown under its name in the add-card picker and
	 * searched alongside it. Say what the card *shows* — the name already says
	 * what it is called. */
	templateDescriptions: {
		note: "任意のノートをダッシュボード上にライブ表示",
		image: "保管庫内の画像をカードいっぱいに表示",
		slideshow: "リストやフォルダの画像を一定間隔で切り替えて表示",
		base: ".baseファイルをObsidianのベースで表示",
		excalidraw: "Excalidrawの図面を、Excalidraw本来のパン・ズーム操作付きで表示",
		canvas: "その場でパンできるキャンバス",
		daily: "常に今日のノートを表示。最初のクリックで作成",
		periodic: "今週・今月・今年のノートをPeriodic Notesから表示",
		journal: "Journalsプラグインのジャーナルの現在のノート",
		web: "iframe内のWebページを一定間隔で更新して表示",
		bookmarks: "Obsidianのブックマークにワンクリックでアクセス",
		favorites: "Hearthでお気に入りにしたノート",
		recent: "最近開いたファイル",
		folder: "フォルダの中身（1階層分）と、その先を閲覧できるブラウザ",
		links: "リンク・ノート・コマンド・フォルダを並べたランチパッド",
		templater: "Templaterのテンプレートから、指定したフォルダにノートを作成するボタン",
		clock: "時刻・日付・あいさつ",
		tasks: "保管庫のチェックボックスをリストまたはボードで表示",
		calendar: "ノートを載せた月間カレンダーをひと目で",
		schedule: "予定を月・週・日・リストで表示",
		stats: "保管庫のノート数・単語数・ファイル数",
		search: "保存したクエリを常に最新の状態で表示",
		searchbar: "ダッシュボード上の検索欄（枠付きまたは枠なし）",
		heatmap: "1年分の保管庫のアクティビティを1日ごとに表示",
		text: "ダッシュボード上に置けるメモ帳",
		calculator: "計算・単位変換・為替レート",
		dataview: "DQLまたはDataviewJSのクエリをDataviewで表示",
		datacore: "Datacoreのクエリまたはスクリプト",
		rss: "フォローしているフィードの見出し",
		jira: "JiraのフィルターまたはJQL検索の課題",
		weather: "指定した場所の天気予報",
		market: "株式・ファンド・為替・暗号資産をリアルタイム表示",
		tension: "Kagi NewsのAIが読み取った、世界の緊張の度合い",
		git: "リポジトリの状態と、コミット・プル・プッシュ",
		"operon-tasks": "好みの条件で絞り込んだOperonのタスク",
		"operon-board": "Operonのパイプラインのステータスをボードの列として表示",
		"operon-agenda": "数日先までのOperonの作業を1日ごとに表示",
		"operon-timer": "Operonで動作中のタイムトラッカーをライブ表示",
		leaf: "他のプラグインのサイドパネルをカード内に表示",
		pet: "ダッシュボードに住む小さな相棒",
		"vault-pet": "Vault Petプラグインのペット。書くほど成長します",
		"vault-pet-house": "Vault Petのペットハウス（クエスト、図鑑、バッジ、統計）",
	},

	// ---- Add-card picker -----------------------------------------------
	cardPicker: {
		title: "カードを追加",
		searchPlaceholder: "カードを検索…",
		allCards: "すべてのカード",
		noMatches: "一致するカードはありません。",
		/** Badge on a card whose plugin (or other dependency) is missing. */
		requires: (name: string) => `${name}が必要`,
		missingNotice: (name: string) =>
			`${name}を利用できません。利用できるようになるまで、カードには案内が表示されます。`,
		installLink: (name: string) => `${name}をインストール`,
		categories: {
			notes: "ノートとファイル",
			planning: "計画",
			vault: "保管庫の分析",
			tools: "ツール",
			integrations: "連携",
			fun: "お楽しみ",
		},
		request: {
			railLabel: "カードをリクエスト",
			heading: "カードをリクエスト",
			intro:
				"足りないものはありますか？Hearthにあったらいいと思うカードを教えてください。" +
				"何を表示し、そのデータをどこから取得するのかを書いてください。",
			footPrompt: "お探しのものが見つかりませんでしたか？",
			footLink: "カードをリクエスト",
			githubTitle: "GitHubでissueを作成",
			githubDesc:
				"公開されて検索もできるため、アイデアを議論するのに最適です。GitHubアカウントが必要です。",
			githubAction: "GitHubを開く",
			emailTitle: "メールを送信",
			emailDesc: "GitHubを使いたくない場合は、メンテナーに直接送れます。メールアプリが開きます。",
			emailAction: "メールを開く",
			prefilledNote:
				"どちらも、いくつかの質問とHearth・Obsidianのバージョンが入力された状態で開きます。送信前に自由に編集してください。",
		},
	},

	// ---- File-type filter labels ---------------------------------------
	fileTypes: {
		folders: "フォルダ",
		markdown: "ノート",
		excalidraw: "Excalidraw",
		canvas: "キャンバス",
		bases: "Bases",
		images: "画像",
		videos: "動画",
		audio: "音声",
		pdf: "PDF",
		documents: "ドキュメント",
		spreadsheets: "スプレッドシート",
		presentations: "スライド",
		threeD: "3D",
		other: "その他",
	},

	// ---- Export / import (portable packages) ---------------------------
	portable: {
		exportModal: {
			title: "ダッシュボードを共有",
			saveFile: "ファイルに保存",
			publishRemovesTitle: "この保管庫から出る前に取り除かれるもの",
			/** Points at the disclosure below, which lists the same groups with
			 * the actual values under each — so the two read as one thing rather
			 * than as two lists that might disagree. */
			publishRemovesTune:
				"下の詳細には同じグループが、それぞれの実際の値とともに並んでいて、含める内容を変更できます。",
			/** Named one by one rather than summarised. "Your private
			 * information is removed" is a promise; this is a list somebody can
			 * check, and the details section below lists the actual values. */
			// Worded to match `groups` below one for one, because they are the
			// same four things and somebody reading both should be able to tell.
			publishRemoves: [
				"ノートとフォルダのパス（ダッシュボードが保管庫内で参照しているものすべて）",
				"カレンダーフィード、非公開のホスト、現在地、保有銘柄",
				"ダッシュボードに入力したテキスト（テキストカードの本文、電卓の最後の計算式）",
				"認証情報（Jiraのトークンなど、カードが保持できるあらゆるもの）",
			],
			publishKeeps:
				"ダッシュボードそのものを形づくる要素は残ります。レイアウト、スタイル、色、画像、カードの設定、検索とクエリ、表示している公開ページやフィードです。下の詳細を開くと、実際の値の確認と、含める内容の変更ができます。",
			intro:
				"このダッシュボード1つをファイルとして保存します。見た目に関する設定はすべて一緒に保存されるので、別の保管庫でも同じように表示されます。",
			name: "名前",
			nameDesc: "ファイル内でのこのダッシュボードの名前です。デフォルトはダッシュボード自身の名前です。",
			description: "説明",
			descriptionDesc: "任意。このダッシュボードの用途を1〜2行で書きます。",
			snapshot: "ダッシュボードのスクリーンショット",
			snapshotDesc:
				"現在のダッシュボードのスクリーンショットです。スクロールしながら撮影するので、縦に長いダッシュボードも全体が収まります。撮影の前にカードの中身は塗りつぶされます。ヘッダー、ツールバー、各カードのタイトルはそのまま残り、時計のように個人的な内容を含まないカードもそのまま写ります。",
			/** Shown once there is a picture. The one thing being asked of the
			 * author, said as the thing it is: look at it. */
			snapshotCheck:
				"公開する前に確認してください。画像の中で読み取れるものは、誰でも読み取れます。クリックすると原寸で表示します。",
			snapshotTake: "スクリーンショットを撮る",
			snapshotRetake: "撮り直す",
			snapshotWorking: "撮影中…",
			snapshotEnlarge: "画像を原寸で開く",
			snapshotTaken: (kb: number) =>
				`${kb} KB：この画像がそのまま公開され、ギャラリーを見るすべての人に表示されます。`,
			/** The gate in front of publishing. Named as a question about this
			 * picture, because that is what it is: the redaction is a rule, and
			 * the author is the only one who can tell whether it read this board
			 * right. */
			snapshotConfirm: "確認しました：個人的な情報は何も読み取れません",
			snapshotConfirmDesc:
				"画像をクリックして原寸で表示し、内容を確認してください。カードのタイトル、ヘッダー、カードが表示しているあなたに関わらない内容は、写っていて問題ありません。ノートの本文、タスク、ファイル名、予定、あなたの生活に関わる数値は写っていてはいけません。確認を済ませるまで公開はできません。",
			snapshotConfirmRequired:
				"まず画像を確認してから、「確認しました」をオンにしてください。",
			/** What to do when the answer is no. Said in the same shape as the
			 * "this board becomes public" warning above, a little more firmly:
			 * not "publish anyway", because a picture that got past the blanking
			 * is a bug, and the next person it happens to won't be looking. */
			snapshotLeak:
				"画像の中にあなたの情報が読み取れる場合は、このダッシュボードを公開しないでください。一度インストールされると、画像は取り消せません。代わりに報告をお願いします。塗りつぶし処理の不具合なので、ほかの人に同じことが起きる前に直す価値があります。",
			snapshotLeakReport: "GitHubで報告",
			snapshotFailed: "Hearthでダッシュボードのスクリーンショットを撮影できませんでした。",
			snapshotRequired:
				"ギャラリーに掲載するには、ダッシュボードのスクリーンショットが必要です。まず撮影してください。公開前に確認できます。",
			snapshotUnavailable:
				"公開にはダッシュボードのスクリーンショットが必要ですが、この環境では撮影できません（スクリーンショットの撮影にはデスクトップアプリが必要です）。ダッシュボードをファイルとして保存し、デスクトップの保管庫から公開することはできます。",
			snapshotNotActive:
				"公開にはダッシュボードのスクリーンショットが必要ですが、Hearthが撮影できるのは開いているダッシュボードだけです。先にこのダッシュボードに切り替えてから公開してください。",
			theme: "使用中のテーマでの表示を推奨",
			themeDesc: (name: string) =>
				`このダッシュボードは使用中のテーマ「${name}」で見ることを想定している、と記載します。インストールする人へのメモで、相手側では何もインストール・変更されません。`,
			themeNone:
				"Obsidianのデフォルトの外観を使用しているため、推奨するテーマはありません。ダッシュボードが特定のテーマ向けに作られている場合は、先にそのコミュニティテーマに切り替えてください。",
			tags: "タグ",
			tagsDesc: "任意。カンマ区切りで入力します。ダッシュボードを閲覧できる場所に公開する場合に役立ちます。",
			tagsPlaceholder: "執筆, ミニマル, ダーク",

			// ---- Identity ----
			identity: "公開者",
			identityDesc:
				"この保管庫の中にだけ保存されるキーから作られた、あなた専用のハンドルネームです。公開するものすべてで同じハンドルネームが使われ、" +
				"あなたが誰なのかは一切わかりません。また、各ファイルはそのキーで署名されるため、" +
				"ほかの人があなたのハンドルネームで公開することはできません。キーをコピーすれば、" +
				"別の環境でも同じハンドルネームを使えます。",
			identityNew:
				"まだハンドルネームがありません。この保管庫から外に出ないキーから作られる匿名のハンドルネームで、" +
				"アカウントもメールアドレスも不要です。あなたが誰なのかに関する情報は一切含まれません。",
			identityCreate: "ハンドルネームを作成",
			identityCreated: (handle: string) =>
				`${handle}として公開します。リカバリーキーをコピーして、安全な場所に保管してください。このハンドルネームを取り戻す唯一の方法です。`,
			identityCopy: "リカバリーキーをコピー",
			identityUnsaved:
				"必要になる前に、リカバリーキーを安全な場所に保存してください。キーはこの保管庫にしかないため、" +
				"なくすとリセットも問い合わせもできず、ハンドルネームと、" +
				"それを使って公開したすべてのものが失われます。",
			identityCopied:
				"リカバリーキーをコピーしました。安全な場所に保管してください。このハンドルネームを取り戻す唯一の方法です。",
			identityCopyFailed: (key: string) => `リカバリーキー：${key}`,
			identityRestore: "別の環境のキーを使う",
			identityReplaceTitle: "ハンドルネームを置き換えますか？",
			identityReplaceWarning:
				"現在のリカバリーキーをまだコピーしていません。別のキーを貼り付けて上書きすると元に戻せません（この保管庫にあるものが唯一のコピーです）。現在のハンドルネームで公開済みのものは公開されたまま残りますが、そのハンドルネームで投稿することは二度とできなくなります。あとで必要になるかもしれない場合は、先にキーをコピーしてください。",
			identityReplaceConfirm: "置き換える",
			identityRestoreLabel: "リカバリーキー",
			identityRestored: (name: string) => `これからは${name}として公開します。`,
			identityRestoreFailed: "Hearthのリカバリーキーではありません。",

			// ---- What travels ----
			contents: "含める内容",
			embedAssets: "壁紙と画像を含める",
			embedAssetsDesc:
				"ダッシュボードの背景画像、画像のアイコン、スライドショーで個別に指定した画像をファイルの中に含めます。それらの画像がない保管庫でも正しく表示されます。ファイルサイズは大きくなります。画像がすでにそろっている自分の保管庫のバックアップでは、オフにしてください。",
			referenceNote: (paths: number, feeds: number) => {
				const parts: string[] = [];
				if (paths > 0) {
					parts.push(`この保管庫のパス${paths}件`);
				}
				if (feeds > 0) {
					parts.push(`カレンダーフィードのURL${feeds}件`);
				}
				return `現状では、このファイルには${parts.join("と")}が含まれます。そのおかげで自分用のバックアップとして機能しますが、公開するダッシュボードでは上のスイッチでこれらを取り除きます。`;
			},
			stripPrivate: "個人的な情報を含めない",
			stripPrivateDesc:
				"ダッシュボードのうち、デザインではなくあなた自身に関わる部分を取り除きます。対象は、参照しているノートとフォルダのパス、カレンダーフィードのリンク、現在地、テキストカードに入力した内容です。ダッシュボードの見た目はまったく変わりません。カードの参照先が空になるだけで、ダウンロードした人はどのみち自分で設定し直すことになります。自分のダッシュボードのコピーとして保存する場合は、パスがそのまま機能する必要があるのでオフにしてください。",

			// ---- The details disclosure ----
			detailsSummary: "含める内容を確認・調整",
			flatten: "この保管庫の外観設定をダッシュボードに書き込む",
			flattenDesc:
				"ダッシュボードの見た目の大部分（グリッド、間隔、カードの質感、背景、ヘッダー）は保管庫全体の設定で、ダッシュボードには上書きした部分だけが保存されています。この設定をオンにすると、実際に適用されている値をダッシュボード自体に書き込むので、ほかの人の保管庫でも相手の設定に左右されず同じ見た目になります。オフにすると、ダッシュボード独自の上書き設定だけを持ち出し、取り込み先の設定になじみます。",
			/** Said on each pinned row, where the switch cannot be moved. */
			groupPinned: "公開時は常に取り除かれます。",
			stripIntro:
				"以下の各グループはファイルから取り除かれます。それぞれの下に、取り除かれる内容が表示されます。これはこのダッシュボードから読み取った実際の一覧です。",
			carriedIntro:
				"何も除外していないため、ここに表示されているのが、ファイルの外を参照しているもののすべてです。上の「個人的な情報を含めない」をオンにすると、最初の3つのグループが取り除かれます。",
			carriedNothing: "このダッシュボードは外部を何も参照していません。",
			// The same four names the publish summary above uses, plus the two
			// it doesn't remove. A reader comparing the two lists should be able
			// to line them up without wondering whether they mean the same thing.
			// Named as the *action*, not as the subject. "Note and folder paths"
			// beside a switch that is on reads just as easily as "include note
			// and folder paths", which is the opposite of what it does — and
			// nobody should have to infer the direction of a privacy control
			// from a heading two rows above it.
			groups: {
				paths: "ノートとフォルダのパスを取り除く",
				private: "カレンダーフィード、非公開のホスト、現在地、保有銘柄を取り除く",
				content: "ダッシュボードに入力したテキストを取り除く",
				queries: "検索とDataviewクエリを取り除く",
				plugins: "コマンドIDとビューの種類を取り除く",
			},
			groupDesc: {
				paths: "このダッシュボードが保管庫内で参照しているものすべてと、埋め込んだ各画像の元のフォルダです。上の壁紙のスイッチがオンなら、画像自体はファイルに含まれます。取り除かれるのは、画像が置かれていたフォルダの情報です。",
				private: "ICSカレンダーのリンク（持っている人なら誰でもそのカレンダーを読めます）、社内のJiraホスト、天気カードに設定した場所、ポートフォリオの保有数と取得額です。",
				content: "テキストカードの本文と電卓の最後の入力です。自分のダッシュボードに書き留めたものが該当します。",
				queries: "デフォルトはオフです。クエリがないと、ダッシュボードは何も表示しなくなります。クエリに非公開のフォルダ名が含まれる場合は、オンにすることをおすすめします。",
				plugins: "デフォルトはオフです。これらはプラグインを示すもので、あなたに関する情報ではありません。取り除くと、それらを実行していたボタンが動作しなくなります。",
			},
			groupEmpty: "このダッシュボードには該当するものがありません。",
			stripTotal: (n: number) =>
				n === 0
					? "このダッシュボードから取り除かれる値はありません。"
					: `${n}件の値が取り除かれます。`,
			stripResidual: (n: number) =>
				`エクスポートしましたが、${n}件の値がまだ保管庫のパスのように見えます。共有する前にファイルを開いて確認することをおすすめします。`,

			signFailed:
				"エクスポートしましたが、署名できなかったため、作成者なしでインポートされます。リカバリーキーが壊れている可能性があります。もう一度貼り付けてみてください。",
			exportButton: "エクスポート",
			assetsSkipped: (paths: string) =>
				`エクスポートしましたが、次の画像は含まれませんでした（大きすぎるか、保管庫にもう存在しません）：${paths}`,
		},
		importModal: {
			title: "インポート",
			kinds: {
				dashboard: "ダッシュボード1つ",
				layout: "ダッシュボードのレイアウト",
				settings: "設定の完全なバックアップ",
			},
			by: (author: string) => `作成者：${author}`,
			signatureInvalid:
				"このファイルには作成者が記載されていますが、署名を検証できません。署名後に編集されたか、" +
				"別の作成者のハンドルネームが付けられた可能性があります。作成者なしで表示します。" +
				"インポートのそれ以外の部分には影響しません。",
			madeWith: (version: string) => `Hearth ${version}`,
			cardCount: (n: number) => `${n}種類のカード`,
			assetCount: (n: number) => `画像${n}枚を同梱`,
			pathCount: (n: number) => `保管庫内のパス${n}件を参照`,
			needsPlugins: (plugins: string) => `必要なプラグイン：${plugins}`,
			mode: "インポート方法",
			modeDesc: "追加する場合、あなたの設定は一切変更されません。",
			modeAdd: "新しいダッシュボードとして追加",
			modeAddBoards: "含まれるダッシュボードを自分のものに追加",
			modeReplaceBoard: (name: string) => `「${name}」を上書きして更新`,
			modeReplaceAll: "すべての設定を置き換える",
			replaceAllWarning:
				"ダッシュボードとHearthのすべての設定を、このファイルの内容で置き換えます。元に戻せません。",
			heads: "注意事項",
			missingPlugins: (plugins: string) =>
				`この環境でインストールまたは有効化されていないプラグイン：${plugins}。有効にするまで、該当するカードは空になります。`,
			missingPaths: (n: number, sample: string) =>
				`このダッシュボードが参照しているノートやフォルダのうち、${n}件が保管庫にありません（${sample}${n > 3 ? ", …" : ""}）。`,
			remoteContent: (n: number) =>
				`開くと、インターネットから${n}件のコンテンツを読み込みます。`,
			missingFine:
				"いずれもインポートの妨げにはなりません。カードはそのまま取り込まれるので、参照先を自分のノートに設定し直せます。",
			importButton: "インポート",
			addedOne: (name: string) => `「${name}」を追加しました。`,
			addedMany: (n: number) => `${n}個のダッシュボードを追加しました。`,
			replacedOne: (name: string) => `「${name}」を更新しました。`,
			restored: "設定を復元しました。",
			assetsWritten: (n: number) =>
				`${n}枚の画像を保管庫に保存しました。`,
			warnMissingPaths: (n: number) =>
				`参照先のパスのうち${n}件が見つかりません。`,
			warnMissingPlugins: (n: number) =>
				`必要なプラグインのうち${n}個が有効になっていません。`,
			warnTaskFields:
				"タスクカードがカスタムフィールドを使用しています。表示するには、設定 → 連携 でタスクフィールドのカスタマイズをオンにしてください。",
			warnUnknownCards: "一部のカードは新しいバージョンのHearthが必要なため、除外されました。",
			warnAssets: "一部の画像がファイルに含まれていませんでした。",
		},
	},

	// ---- Dashboard gallery ---------------------------------------------
	gallery: {
		/** The closed list in `src/gallery/categories.ts`. Ids are stored, so a
		 * name may be reworded freely but an id may never be. */
		categories: {
			productivity: "生産性・タスク管理",
			planning: "計画とカレンダー",
			study: "学習・研究",
			writing: "執筆・日記",
			work: "仕事・プロジェクト",
			personal: "個人・暮らし",
			minimal: "ミニマル",
			dense: "情報量重視",
			other: "その他",
		},
		sorts: {
			trending: "注目",
			top: "高評価順",
			new: "新着順",
			downloads: "インストール数順",
		},
		browse: {
			title: "ダッシュボードギャラリー",
			openLabel: "ギャラリー",
			openAria: "ダッシュボードギャラリーを見る",
			searchPlaceholder: "ダッシュボードを検索…",
			all: "すべてのダッシュボード",
			mine: "自分が公開したもの",
			scopeLabel: "カテゴリ",
			sortLabel: "並べ替え",
			refresh: "更新",
			publish: "ダッシュボードを公開",
			loading: "読み込み中…",
			empty: "まだ何もありません。",
			emptySearch: (query: string) => `「${query}」に一致するものはありません。`,
			emptyMine:
				"まだ何も公開していません。ダッシュボードを公開すると、ここに表示されます。",
			results: (shown: number, total: number) =>
				total > shown ? `${total}個中${shown}個` : `${shown}個のダッシュボード`,
			more: "さらに表示",
			byAuthor: (handle: string) => `作成者：${handle}`,
			anonymous: "作成者不明",
			downloads: (n: number) => `${n}回インストール`,
			score: (n: number) => `${n > 0 ? "+" : ""}${n}`,
			cardCount: (n: number) => `カード${n}枚`,
			pluginBoard: "プラグインのビューを表示",
			noPicture: "画像なし",
			needsIdentity:
				"閲覧とインストールはハンドルネームなしでできますが、投票と公開にはハンドルネームが必要です。Hearthは、この保管庫から外に出ないキーから匿名のハンドルネームを作成します。",
			needsIdentityVote:
				"投票にはハンドルネームが必要です。Hearthは、この保管庫から外に出ないキーから匿名のハンドルネームを作成します。アカウントは不要で、あなたが誰なのかに関する情報は含まれません。今すぐ作成しますか？",
		},
		detail: {
			install: "インストール",
			installing: "ダウンロード中…",
			installAria: (name: string) => `${name}をインストール`,
			enlarge: "画像を原寸で開く",
			profile: (handle: string) => `${handle}が公開したものをすべて見る`,
			upvoteAria: "高評価",
			downvoteAria: "低評価",
			published: (when: string) => `${when}に公開`,
			updated: (when: string) => `${when}に更新`,
			version: (v: string) => `作成者が付けたバージョン：${v}`,
			theme: (name: string) => `テーマ「${name}」での表示を推奨`,
			madeWith: (v: string) => `Hearth ${v}で作成`,
			contents: "このダッシュボードの内容",
			requires: "必要なもの",
			requiresPlugins: "プラグイン",
			requiresViews: "表示するビュー",
			requiresSettings: "設定",
			nothingRequired: "Hearth本体以外は不要です。",
			size: (kb: number) => `${kb} KB`,
			remote: (n: number) =>
				`このダッシュボードの${n}件のコンテンツは、インターネットから読み込まれます。`,
			noRemote: "このダッシュボードには、インターネットから読み込まれるものはありません。",
			unverified:
				"このダッシュボードには検証できる署名がないため、作成者を確認できません。",
			tags: "タグ",
		},
		profile: {
			title: (handle: string) => handle,
			subtitle:
				"署名キーから生成された匿名のハンドルネームです。その人が誰なのかは何もわかりません。わかるのは、これらすべてが同じ人によって作られたということだけです。",
			karma: "Karma",
			karmaHint: "その人が公開したすべてのものに付いた高評価の合計から、低評価の合計を引いた数です。",
			totalDownloads: "インストール数",
			published: (n: number) => `${n}個のダッシュボード`,
			firstSeen: (when: string) => `${when}に初公開`,
			empty: "このハンドルネームで公開されたものはありません。",
		},
		comments: {
			heading: (n: number) => `${n}件のコメント`,
			headingEmpty: "コメント",
			none: "まだコメントはありません。最初のコメントを書いてみましょう。",
			placeholder: "質問や、使ってみた感想を書いてください…",
			post: "投稿",
			remove: "このコメントを削除",
		},
		publish: {
			title: "ギャラリーに公開",
			intro:
				"このダッシュボードをギャラリーに掲載します。このHearthギャラリーを使っている人なら誰でも、見つけてインストールできます。",
			category: "カテゴリ",
			categoryDesc: "このダッシュボードの用途です。ほかの人が見つけるときの手がかりになります。",
			button: "公開",
			publishing: "公開中…",
			/** Said before the upload, not after: a published board is copied by
			 * strangers, and neither an unpublish nor an edit reaches the copies. */
			warning:
				"このダッシュボードは一般公開され、このギャラリーを使っている人なら誰でも見つけてインストールできます。公開はいつでも取り下げられますが、すでにインストールした人の手元にはコピーが残ります。",
			needsName: "公開する前に、ダッシュボードに名前を付けてください。",
			residual: (n: number) =>
				`公開を保留しました：取り除いた後も、${n}件の値が保管庫のパスのように見えます。公開する前に詳細セクションを確認してください。`,
			done: (name: string) => `「${name}」をギャラリーに公開しました。`,
			/** The gallery took it but is holding it back — its own check saw
			 * something that still looks like a path from your vault. */
			doneHeld: (name: string) =>
				`ギャラリーは「${name}」を受け付けましたが、審査のため保留しています。保管庫のパスのように見えるものがまだ含まれているためです。ギャラリー側で確認されるまで一覧には表示されません。`,
			doneUpdate: (name: string) => `ギャラリーの「${name}」を更新しました。`,
			/** Beside the remove button on your own entry: publish the board
			 * again, over this listing rather than beside it. */
			update: "更新",
			/** While it is reading the entry to work out which board it is. */
			updateChecking: "確認中…",
			updateDesc: "このダッシュボードを、この掲載に上書きして公開し直します。",
			updateMissing:
				"この掲載の元になったダッシュボードがこの保管庫にありません（削除されたか、別の保管庫にあります）。ここから公開すると別の掲載が作られるため、更新できるものはありません。",
			/** Nothing has said which board this is yet — an entry published
			 * before Hearth kept the note, or to a gallery too old to be asked.
			 * The button still works: pressing it reads the entry to find out. */
			updateUnknown:
				"この掲載がどのダッシュボードのものか、Hearthはまだ把握していません。「更新」を押すと、掲載内容を読み取って確認します。",
			unpublish: "ギャラリーから削除",
			unpublishConfirm: (name: string) =>
				`「${name}」をギャラリーから削除しますか？すでにインストールした人の手元にはコピーが残りますが、新たに見つけることはできなくなります。`,
			unpublished: "ギャラリーから削除しました。",
		},
		settings: {
			heading: "ダッシュボードギャラリー",
			host: "ギャラリーのアドレス",
			hostDesc:
				"Hearthが閲覧・公開に使うギャラリーです。ギャラリーを開くまでは何も取得せず、公開するまでは何も送信しません。この欄を空にするとギャラリーは完全にオフになり、そのままオフに保たれます。httpsのみ対応しています（自分で運用するギャラリー向けに、localhostならhttpも使えます）。",
			hostPlaceholder: "https://gallery.example.com",
			hostInvalid: "Hearthが接続できるアドレスではありません。httpsか、localhostのhttpを使ってください。",
			hostCleared: "ギャラリーをオフにしました。",
			hostSet: (host: string) => `ギャラリーを${host}に設定しました。`,
			browse: "ギャラリーを見る",
			browseDesc: "ほかの人が公開したダッシュボードと、自分で公開したダッシュボードです。",
			browseButton: "ギャラリーを開く",
		},
		errors: {
			noHost:
				"ギャラリーが設定されていません。Hearthの設定の「ダッシュボードギャラリー」で、ギャラリーのアドレスを入力してください。",
			externalCallsOff:
				"ギャラリーはインターネット上のサーバーですが、この保管庫では「外部通信を無効にする」がオンになっています。閲覧や公開をするには、これをオフにしてください。",
			offline: "ギャラリーに接続できませんでした。ギャラリーが停止しているか、このデバイスがオフラインの可能性があります。",
			badResponse: "そのアドレスから応答がありましたが、Hearthギャラリーの応答ではありません。",
			unauthorized: "ギャラリーがこの保管庫のハンドルネームを認証しませんでした。",
			forbidden: "ギャラリーは、この保管庫のハンドルネームでのその操作を許可しませんでした。",
			rateLimited: "ギャラリーへのリクエストが多すぎます。数分後にもう一度お試しください。",
			tooLarge: "このダッシュボードはこのギャラリーには大きすぎます。壁紙をオフにするか、サイズを小さくしてください。",
			rejected: (why: string) => `ギャラリーに拒否されました：${why}`,
			notFound: "ギャラリーに該当するものがありません。",
			server: "ギャラリーでリクエストの処理中に問題が発生しました。",
			unsigned:
				"Hearthがファイルに署名できなかったため、公開しませんでした。署名のないダッシュボードは作成者を証明できません。",
		},
	},

	// ---- Layout import errors ------------------------------------------
	layout: {
		invalidJson: "有効なJSONではありません。",
		notAnObject: "レイアウトはJSONオブジェクトである必要があります。",
		noValidDashboards: "レイアウトに有効なダッシュボードが含まれていません。",
		noValidCards: "レイアウトに有効なカードが含まれていません。",
		notAHearthLayout:
			'Hearthのレイアウトではありません（「dashboards」または「cards」の配列が見つかりません）。',
		notHearthSettings:
			'Hearthの設定バックアップではありません（「hearthSettings」マーカーもレイアウトも見つかりません）。',
	},

	// ---- A vault item's menu (src/filemenu.ts) ----------------------------
	// ---- Cards with views (#385, src/cardviews.ts) -------------------------
	views: {
		switcherAria: "ビュー",
		switchTo: (label: string) => `${label}に切り替え`,
		chooseView: "ビューを選択",
		nextViewAria: (label: string) => `次のビューを表示（${label}）`,
		merged: "結合しました。カードの設定の「ビュー」から、再び取り出せます。",
		tuiHelp: "ビューを持つカードの次／前のビュー",
		editor: {
			tab: "ビュー",
			heading: "ビュー",
			headingDesc:
				"1枚のカードに複数のビューを持たせ、切り替えて表示できます。各ビューには任意の種類のカードを使えます。内容はビューごとに保持され、サイズ・色・質感はカード共通です。",
			kindShown: (kind: string) => `${kind} · 表示中`,
			edit: "このビューの内容を編集",
			show: "このビューをカードに表示",
			moveUp: "上へ移動",
			moveDown: "下へ移動",
			detach: "独立したカードとして取り出す",
			detached: "独立したカードとしてダッシュボードに取り出しました。",
			remove: "このビューを削除",
			removeTitle: "このビューを削除しますか？",
			removeMessage: (label: string) => `「${label}」とその内容がこのカードから削除されます。`,
			removeConfirm: "削除",
			add: "ビューを追加",
			addDesc: "任意の種類の新しいカードを、このカードの次のビューとして追加します。",
			addNew: "新しいビュー…",
			merge: "別のカードをこのカードに結合",
			mergeDesc:
				"このダッシュボード上にある既存のカードを、内容を保ったままこのカードの次のビューにします。配置の編集中に、カードを別のカードの上に重ねて離しても同じことができます。",
			mergeButton: "結合",
			withViews: (name: string, count: number) => `${name}（${count}個のビュー）`,
			split: "別々のカードに分割",
			splitDesc: "すべてのビューを、それぞれ独立したカードとしてダッシュボードに戻します。",
			splitButton: "分割",
			splitTitle: "このカードを分割しますか？",
			splitMessage: (count: number) => `${count}個のビューが、ダッシュボード上の${count}枚の別々のカードになります。`,
			splitConfirm: "分割",
			editing: "編集するビュー",
			editingDesc: "以下の設定で変更する対象のビューです。",
			label: "切り替えに表示するラベル",
			labelDesc: "空欄の場合は、ビューの内容または種類に応じた名前が表示されます。",
			icon: "切り替えに表示するアイコン",
			iconDesc: "Lucideのアイコン名です。空欄の場合は、ビューの種類に応じて決まります。",
			switcher: "ビュー切り替え",
			placement: "位置",
			placementDesc:
				"ビュー切り替えを置く場所です。「自動」では、タイトルのあるカードはヘッダーに、タイトルのないカードは右上の隅に配置します。",
			placements: {
				auto: "自動",
				header: "ヘッダー内",
				"top-left": "左上の隅",
				"top-right": "右上の隅",
				"bottom-left": "左下の隅",
				"bottom-right": "右下の隅",
				hidden: "非表示",
			},
			hiddenNote: "ビュー切り替えは表示されません。ビューは、スワイプ、自動切り替え、またはカードの設定から切り替えます。",
			style: "スタイル",
			styleDesc: "選択肢の表示方法です。幅の狭いカードでビューが多い場合は、ドロップダウンが適しています。",
			styles: {
				tabs: "タブ",
				dropdown: "ドロップダウン",
				dots: "ドット",
				icons: "アイコン",
			},
			labelStyle: "タブの表示内容",
			labelStyleDesc: "各タブに表示するものです。",
			labels: {
				label: "ラベル",
				icon: "アイコン",
				both: "アイコンとラベル",
			},
			reveal: "ビュー切り替えの表示",
			revealDesc: "隅に置いたビュー切り替えは、ポインターがカードの上に来るまで隠しておけます。",
			reveals: {
				always: "常に表示",
				hover: "ホバー時",
			},
			rotate: "自動切り替えの間隔（秒）",
			rotateDesc:
				"一定時間ごとに次のビューに移ります。カードにポインターを合わせている間や入力中は一時停止します。空欄でオフ、最小3秒です。",
			rotateOff: "オフ",
			swipe: "スワイプで切り替え",
			swipeDesc: "タッチスクリーンでカードを横にスワイプすると、次または前のビューに移ります。",
			remember: "表示中のビューを記憶",
			rememberDesc:
				"再起動後も、最後に表示したビューから始めます。切り替えるたびに保存されるため、同期している保管庫では変更として受け取られます。",
			narrow: "幅の狭いダッシュボードでは",
			narrowDesc: "ビュー切り替えをそのまま使うか、すべてのビューを独立したカードとして縦に並べて表示します。",
			narrows: {
				switcher: "ビュー切り替えを維持",
				split: "ビューごとに1枚のカード",
			},
		},
	},

	fileMenu: {
		newNote: "新規ノート",
		newFolder: "新規フォルダ",
		rename: "名前を変更…",
		makeCopy: "コピーを作成",
		delete: "削除",
		untitled: "無題",
		folderName: "フォルダ名",
		newName: "新しい名前",
		exists: (name: string) => `「${name}」はすでに存在します。`,
		invalidName: "名前に / \\ : は使えません。",
	},

	// ---- Terminal mode (src/tui/) -----------------------------------------
	tui: {
		boardLabel: "ダッシュボード（ターミナルモード）",
		cardMenu: "カードメニュー",
		removeCard: "カードを削除",
		resize: "ドラッグしてサイズを変更",
		moveUp: "上へ移動",
		moveDown: "下へ移動",
		moveBoardLeft: "ダッシュボードを左へ移動",
		moveBoardRight: "ダッシュボードを右へ移動",
		moreBoards: (n: number) => `ほか${n}個のダッシュボード：すべてを一覧表示`,
		emptyBoard: "このダッシュボードは空です。",
		emptyBoardHint: "F7またはnでカードを追加します。",
		moved: (title: string) => `${title}を移動しました`,
		scroll: (first: number, total: number) => `${first}/${total}`,
		arrangeFoot: "矢印で移動 · Shift+矢印でサイズ変更 · xで削除",
		arrangeHint: "枠をドラッグすると移動、角をドラッグするとサイズを変更します。",
		arranging: "配置を編集中",
		arrange: "配置を編集",
		doneArranging: "完了",
		arrangeOn: "配置を編集中です。矢印キーでフォーカス中のカードを移動し、F2で終了します。",
		arrangeOff: "レイアウトを保存しました。",
		menuDetail: "拡大ビューを開く",
		menuZoom: "ズーム",
		menuRefresh: "更新",
		menuSettings: "カードの設定",
		menuPin: "すべてのダッシュボードにピン留め",
		menuUnpin: "すべてのダッシュボードからピン留めを解除",
		menuDuplicate: "複製",
		menuRemove: "カードを削除",
		searchLabel: "検索:",
		restingHint: "Tabでカード移動 · ↑↓でカード内 · Enterで開く · mでメニュー · F1でヘルプ",
		cardCount: (n: number) => `カード${n}枚`,
		refreshed: (n: number) => `${n}枚のカードを更新しました。`,
		noSearch: "このダッシュボードでは検索セクションが非表示です。",
		noFilter: "フォーカス中のカードにはフィルターがありません。",
		noSort: "フォーカス中のカードには並べ替えるものがありません。",
		schemeSet: (name: string) => `配色：${name}`,
		schemes: {
			theme: "Obsidianのテーマ",
			htop: "Htop",
			hearth: "Hearth",
			amber: "アンバー",
			paper: "ペーパー",
		},
		quitTitle: "ターミナルモードを終了しますか？",
		quitMessage:
			"Hearthは通常のグラフィカルなデザインに戻ります。ターミナルモードは、設定 → Hearth → 外観 でもう一度オンにできます。",
		quitConfirm: "ターミナルモードを終了",
		fn: {
			help: "ヘルプ",
			arrange: "配置",
			search: "検索",
			filter: "フィルター",
			refresh: "更新",
			sort: "並べ替え",
			add: "追加",
			board: "ダッシュボード",
			scheme: "配色",
			quit: "終了",
		},
		open: "開く",
		openNewTab: "新規タブで開く",
		openSplit: "右側に開く",
		cards: {
			filesFoot: "Enterで開く · 右クリックでファイルメニュー",
			launchFoot: "矢印で選択 · Enterで実行",
			statsEmpty: "統計が選択されていません。カードの設定で選択してください。",
			heatTotal: (total: string, weeks: number) => `${weeks}週間で計${total}`,
			heatFoot: "矢印で日を移動 · Enterでその日のデイリーノートを開く",
			heatFootNoDaily: "矢印で日を移動",
			calcFoot: "式を入力 · Enterで選択",
			loading: "読み込み中…",
			tick: "チェックを入れる",
			untick: "チェックを外す",
			noteFoot: "Spaceでチェック · Enterでリンク先へ · oでノートを開く",
			noteFootEdit: "iで編集 · Spaceでチェック · Enterでリンク先へ · oでノートを開く",
			sectionEmpty: "このセクションにはまだ何もありません。",
			editing: "編集中",
			editingFoot: "EscかCtrl+Enterで終了 · 入力すると自動保存",
			edit: "編集",
			notFound: (path: string) => `見つかりません：${path}`,
			due: "期限",
			task: "タスク",
			tasksFoot: "Spaceでチェック · Enterで開く · fでフィルター · sで並べ替え · bでボード表示 · mでマトリクス表示 · +で追加",
			tasksOpen: (n: number) => `未完了${n}件`,
			tasksNoAdd: "このカードのソースはクイック追加に対応していません。代わりにノートにチェックボックスを追加してください。",
			tasksAddTo: (column: string) => `${column}に新しいカード`,
			columnLeft: "列を左へ移動",
			columnRight: "列を右へ移動",
			boardNoColumns: "すべての列が非表示です。カードの設定で再表示してください。",
			boardFoot: "矢印で移動 · Shift+矢印でカードを移動 · Spaceでチェック · fでフィルター · bでリスト表示 · mでマトリクス表示",
			boardHint: (cards: number, columns: number) => `${columns}列に${cards}件`,
			showList: "リストで表示",
			showBoard: "ボードで表示",
			matrixFoot: "矢印で移動 · Shift+矢印でタスクを別の象限へ · Spaceでチェック · Enterで開く · mでリスト表示",
			matrixMore: (n: number) => `+ ほか${n}件`,
			showMatrix: "マトリクスで表示",
			calNothing: "予定はありません。Enterでデイリーノートを開きます。",
			calNothingNoNotes: "予定はありません。",
			calEvents: (n: number) => `${n}件の予定`,
			calFoot: "矢印で日を移動 · PgUp/PgDnで月を移動 · Enterで開く · Homeで今日",
			agendaFoot: "矢印で選択 · Enterで開く",
			schedFoot: "[ ]かPgUp/PgDnで前後へ · vで表示切替 · 矢印で日を移動 · Enterで開く · Homeで今日",
			allDayShort: "終日",
			weatherFoot: "矢印で日を選択 · Enterで1時間ごとに表示",
			weatherCardFoot: "Enterで詳しい予報を開く",
			tensionFoot: "EnterでKagi Newsの指数を開く",
			mkName: "銘柄名",
			mkSymbol: "コード",
			mkPrice: "価格",
			mkChange: "変動",
			mkOpen: "大きく開く",
			mkListFoot: "Enterで開く · [ ]で期間 · rで更新",
			mkSingleFoot: "Enterで開く · ←/→で銘柄 · [ ]で期間 · rで更新",
			mkDetailFoot: "[ ]で期間 · rで更新 · Backspaceで戻る",
			mkLookupFoot: "[ ]で期間 · Enterで選択",
			mkResultsFoot: "Enterで表示 · Spaceでカードに追加",
			gitFoot: "Enterで開く · Spaceでステージ · Delで破棄 · rで再読み込み",
			rssOpen: "ブラウザで開く",
			copyLink: "リンクをコピー",
			rssFoot: "Enterで開く · uで既読/未読 · Aですべて既読 · fで未読のみ · rで更新",
			rssFootTabs: "Enterで開く · ←/→でソース · uで既読/未読 · Aですべて既読 · fで未読のみ · rで更新",
			jiraKey: "キー",
			jiraType: "種類",
			jiraPriority: "優先度",
			jiraSummary: "概要",
			jiraStatus: "状態",
			jiraClear: "クリア",
			jiraFoot: "Enterで課題を開く · 矢印でフィルターへ · rで更新",
			opFlags: "^ ピン留め · ~ 繰り返し · * タイマー実行中 · # ブロック中",
			opReload: "再読み込み",
			opListFoot: "Enterで開く · +で追加 · rで再読み込み",
			opReadFoot: "Enterで開く · rで再読み込み",
			opAgendaFoot: "Enterで開く · rで再読み込み",
			opBoardFoot: "矢印で移動 · Shift+←/→でタスクを移動 · +で追加 · rで再読み込み",
			folderFoot: "Enterで開く · Spaceでフォルダを折りたたむ · oで閲覧",
			bookmarksFoot: "Enterで開く · Spaceでグループを折りたたむ",
			dvNoResults: "結果なし",
			dvError: "Dataviewでこのクエリを実行できませんでした",
			petFoot: "EnterかSpaceでなでる",
		},
		settings: {
			name: "ターミナル",
			experimental: "実験的",
			desc: "Hearth全体をテキストで表示します。文字のグリッド、罫線で描いたカード、すべての操作に割り当てたキーで、ターミナルツールのような見た目になります。どんなマシンでも軽快に動きます。",
			heading: "ターミナルモード",
			headingDesc: "テキストインターフェースの見た目です。オンの間は、すべてのダッシュボードがこの表示になります。",
			scheme: "配色",
			schemeDesc: "「Obsidianのテーマ」はすべての色を使用中のテーマから取得します。それ以外は固定の配色です。",
			fontSize: "フォントサイズ",
			fontSizeDesc: "ターミナルの文字サイズ（ピクセル）です。各カードのグリッド上の位置は変わりません。",
			overrides: "ターミナルモードが上書きするもの",
			overridesDesc:
				"壁紙、すりガラス、カードの質感、アニメーションは描画されず、各ダッシュボードとカードのクラシック／エクスプレッシブの選択は、ターミナルモードをオフにするまで適用されません。画像のカードや他のプラグインのビューは、ターミナルの枠の中にそのまま表示されます。その間は効果のない設定（カードの「スタイル」タブ、壁紙、カードの質感、ヘッダーのアイコンとサイズ）は非表示になります。ただし、ターミナルモードでもそのまま表示されるプラグインダッシュボードがそれらを使っている場合は表示されます。",
		},
		helpTitle: "キー操作",
		help: {
			nextCard: "次／前のカード",
			moveSelection: "フォーカス中のカード内を移動",
			moveSideways: "カード内、または隣のカードへ移動",
			open: "選択した項目を開く",
			toggle: "タスクのチェック、フォルダの折りたたみ、ボード上のカードの移動",
			menu: "カードメニュー（右クリック、または枠の ≡ でも開けます）",
			zoom: "カードを全体表示にズーム",
			detail: "カードの拡大ビューを開く",
			settings: "カードの設定",
			escape: "入力欄から出る、またはフォーカスを外す",
			search: "保管庫を検索",
			boards: "ダッシュボードを切り替え",
			stepBoards: "前／次のダッシュボード",
			arrange: "ダッシュボードの配置を編集",
			add: "カードを追加",
			filter: "フォーカス中のカードにフィルターをかける",
			sort: "フォーカス中のカードを並べ替え",
			refresh: "すべてのカードを更新",
			board: "ダッシュボードの設定",
			scheme: "次の配色",
			help: "この一覧",
			quit: "ターミナルモードを終了",
			arrangeNote:
				"配置の編集中は、矢印キーでフォーカス中のカードを移動し、Shift+矢印キーでサイズを変更します。枠をドラッグして移動したり、角をドラッグしてサイズを変更したりもできます。",
		},
	},
};
