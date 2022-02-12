const { StartPage } = require('../models');

const wordBank = [
  {
    word:'aboard',
  },
  {
    word:'across',
  },
  {
    word:'active',
  },
  {
    word:'advise',
  },
  {
    word:'afraid',
  },
  {
    word:'almost',
  },
  {
    word:'animal',
  },
  {
    word:'anyone',
  },
  {
    word:'appear',
  },
  {
    word:'artist',
  },
  {
    word:'appear',
  },
  {
    word:'assist',
  },
  {
    word:'attend',
  },
  {
    word:'avenue',
  },
  {
    word:'accept',
  },
  {
    word:'acting',
  },
  {
    word:'actual',
  },
  {
    word:'affect',
  },
  {
    word:'agency',
  },
  {
    word:'always',
  },
  {
    word:'anyway',
  },
  {
    word:'around',
  },
  {
    word:'aspect',
  },
  {
    word:'assume',
  },
  {
    word:'august',
  },
  {
    word:'access',
  },
  {
    word:'action',
  },
  {
    word:'advice',
  },
  {
    word:'afford',
  },
  {
    word:'agenda',
  },
  {
    word:'amount',
  },
  {
    word:'answer',
  },
  {
    word:'appeal',
  },
  {
    word:'arrive',
  },
  {
    word:'assess',
  },
  {
    word:'attack',
  },
  {
    word:'author',
  },
  {
    word:'barely',
  },
  {
    word:'backed',
  },
  {
    word:'battle',
  },
  {
    word:'become',
  },
  {
    word:'behind',
  },
  {
    word:'bishop',
  },
  {
    word:'bottom',
  },
  {
    word:'breath',
  },
  {
    word:'broken',
  },
  {
    word:'bureau',
  },
  {
    word:'beauty',
  },
  {
    word:'before',
  },
  {
    word:'belief',
  },
  {
    word:'better',
  },
  {
    word:'border',
  },
  {
    word:'bought',
  },
  {
    word:'bridge',
  },
  {
    word:'button',
  },
  {
    word:'budget',
  },
  {
    word:'became',
  },
  {
    word:'behalf',
  },
  {
    word:'belong',
  },
  {
    word:'beyond',
  },
  {
    word:'bottle',
  },
  {
    word:'branch',
  },
  {
    word:'bright',
  },
  {
    word:'burden',
  },
  {
    word:'camera',
  },
  {
    word:'cancer',
  },
  {
    word:'career',
  },
  {
    word:'caught',
  },
  {
    word:'chance',
  },
  {
    word:'choice',
  },
  {
    word:'church',
  },
  {
    word:'closed',
  },
  {
    word:'common',
  },
  {
    word:'column',
  },
  {
    word:'corner',
  },
  {
    word:'couple',
  },
  {
    word:'create',
  },
  {
    word:'custom',
  },
  {
    word:'cannot',
  },
  {
    word:'castle',
  },
  {
    word:'center',
  },
  {
    word:'change',
  },
  {
    word:'choose',
  },
  {
    word:'circle',
  },
  {
    word:'closer',
  },
  {
    word:'combat',
  },
  {
    word:'comply',
  },
  {
    word:'costly',
  },
  {
    word:'course',
  },
  {
    word:'credit',
  },
  {
    word:'camera',
  },
  {
    word:'carbon',
  },
  {
    word:'casual',
  },
  {
    word:'charge',
  },
  {
    word:'chosen',
  },
  {
    word:'client',
  },
  {
    word:'coffee',
  },
  {
    word:'coming',
  },
  {
    word:'copper',
  },
  {
    word:'county',
  },
  {
    word:'covers',
  },
  {
    word:'crisis',
  },
  {
    word:'dealer',
  },
  {
    word:'decide',
  },
  {
    word:'define',
  },
  {
    word:'depend',
  },
  {
    word:'design',
  },
  {
    word:'detect',
  },
  {
    word:'dinner',
  },
  {
    word:'dollar',
  },
  {
    word:'driven',
  },
  {
    word:'damage',
  },
  {
    word:'debate',
  },
  {
    word:'defeat',
  },
  {
    word:'degree',
  },
  {
    word:'deputy',
  },
  {
    word:'desire',
  },
  {
    word:'device',
  },
  {
    word:'direct',
  },
  {
    word:'domain',
  },
  {
    word:'driver',
  },
  {
    word:'danger',
  },
  {
    word:'decade',
  },
  {
    word:'defend',
  },
  {
    word:'demand',
  },
  {
    word:'desert',
  },
  {
    word:'detail',
  },
  {
    word:'differ',
  },
  {
    word:'doctor',
  },
  {
    word:'double',
  },
  {
    word:'during',
  },
  {
    word:'easily',
  },
  {
    word:'effect',
  },
  {
    word:'either',
  },
  {
    word:'empire',
  },
  {
    word:'ending',
  },
  {
    word:'engine',
  },
  {
    word:'entire',
  },
  {
    word:'escape',
  },
  {
    word:'exceed',
  },
  {
    word:'expand',
  },
  {
    word:'export',
  },
  {
    word:'eating',
  },
  {
    word:'efffort',
  },
  {
    word:'eleven',
  },
  {
    word:'employ',
  },
  {
    word:'energy',
  },
  {
    word:'enough',
  },
  {
    word:'entity',
  },
  {
    word:'estate',
  },
  {
    word:'except',
  },
  {
    word:'expect',
  },
  {
    word:'extend',
  },
  {
    word:'editor',
  },
  {
    word:'eighth',
  },
  {
    word:'emerge',
  },
  {
    word:'enable',
  },
  {
    word:'engage',
  },
  {
    word:'ensure',
  },
  {
    word:'equity',
  },
  {
    word:'ethnic',
  },
  {
    word:'excess',
  },
  {
    word:'expert',
  },
  {
    word:'extent',
  },
  {
    word:'fabric',
  },
  {
    word:'failed',
  },
  {
    word:'family',
  },
  {
    word:'fellow',
  },
  {
    word:'filing',
  },
  {
    word:'fiscal',
  },
  {
    word:'follow',
  },
  {
    word:'forget',
  },
  {
    word:'former',
  },
  {
    word:'fourth',
  },
  {
    word:'future',
  },
  {
    word:'fairly',
  },
  {
    word:'famous',
  },
  {
    word:'female',
  },
  {
    word:'finger',
  },
  {
    word:'flight',
  },
  {
    word:'fallen',
  },
  {
    word:'father',
  },
  {
    word:'figure',
  },
  {
    word:'finish',
  },
  {
    word:'flying',
  },
  {
    word:'forest',
  },
  {
    word:'format',
  },
  {
    word:'fought',
  },
  {
    word:'friend',
  },
  {
    word:'gender',
  },
  {
    word:'golden',
  },
  {
    word:'guilty',
  },
  {
    word:'garden',
  },
  {
    word:'ground',
  },
  {
    word:'gather',
  },
  {
    word:'global',
  },
  {
    word:'growth',
  },
  {
    word:'happen',
  },
  {
    word:'health',
  },
  {
    word:'holder',
  },
  {
    word:'handed',
  },
  {
    word:'hardly',
  },
  {
    word:'height',
  },
  {
    word:'honest',
  },
  {
    word:'handle',
  },
  {
    word:'headed',
  },
  {
    word:'hidden',
  },
  {
    word:'import',
  },
  {
    word:'injury',
  },
  {
    word:'intent',
  },
  {
    word:'itself',
  },
  {
    word:'income',
  },
  {
    word:'inside',
  },
  {
    word:'invest',
  },
  {
    word:'impact',
  },
  {
    word:'indeed',
  },
  {
    word:'intend',
  },
  {
    word:'island',
  },
  {
    word:'junior',
  },
  {
    word:'jersey',
  },
  {
    word:'killed',
  },
  {
    word:'latest',
  },
  {
    word:'lawyer',
  },
  {
    word:'leaves',
  },
  {
    word:'lesson',
  },
  {
    word:'likely',
  },
  {
    word:'listen',
  },
  {
    word:'losing',
  },
  {
    word:'leader',
  },
  {
    word:'legacy',
  },
  {
    word:'letter',
  },
  {
    word:'linked',
  },
  {
    word:'little',
  },
  {
    word:'lucent',
  },
  {
    word:'labor',
  },
  {
    word:'launch',
  },
  {
    word:'league',
  },
  {
    word:'length',
  },
  {
    word:'lights',
  },
  {
    word:'liquid',
  },
  {
    word:'living',
  },
  {
    word:'luxury',
  },
  {
    word:'mainly',
  },
  {
    word:'manner',
  },
  {
    word:'marine',
  },
  {
    word:'mature',
  },
  {
    word:'memory',
  },
  {
    word:'merger',
  },
  {
    word:'miller',
  },
  {
    word:'mirror',
  },
  {
    word:'modest',
  },
  {
    word:'museum',
  },
  {
    word:'making',
  },
  {
    word:'manual',
  },
  {
    word:'marked',
  },
  {
    word:'master',
  },
  {
    word:'medium',
  },
  {
    word:'mental',
  },
  {
    word:'method',
  },
  {
    word:'mining',
  },
  {
    word:'mobile',
  },
  {
    word:'module',
  },
  {
    word:'mostly',
  },
  {
    word:'moving',
  },
  {
    word:'mutual',
  },
  {
    word:'manage',
  },
  {
    word:'margin',
  },
  {
    word:'market',
  },
  {
    word:'matter',
  },
  {
    word:'member',
  },
  {
    word:'merely',
  },
  {
    word:'middle',
  },
  {
    word:'minute',
  },
  {
    word:'modern',
  },
  {
    word:'moment',
  },
  {
    word:'mother',
  },
  {
    word:'murder',
  },
  {
    word:'myself',
  },
  {
    word:'narrow',
  },
  {
    word:'nature',
  },
  {
    word:'nights',
  },
  {
    word:'notice',
  },
  {
    word:'nation',
  },
  {
    word:'nearby',
  },
  {
    word:'nobody',
  },
  {
    word:'notion',
  },
  {
    word:'native',
  },
  {
    word:'nearly',
  },
  {
    word:'normal',
  },
  {
    word:'number',
  },
  {
    word:'object',
  },
  {
    word:'offset',
  },
  {
    word:'orange',
  },
  {
    word:'oxford',
  },
  {
    word:'obtain',
  },
  {
    word:'online',
  },
  {
    word:'origin',
  },
  {
    word:'office',
  },
  {
    word:'output',
  },
  {
    word:'parent',
  },
  {
    word:'people',
  },
  {
    word:'person',
  },
  {
    word:'planet',
  },
  {
    word:'plenty',
  },
  {
    word:'policy',
  },
  {
    word:'prince',
  },
  {
    word:'proper',
  },
  {
    word:'pursue',
  },
  {
    word:'packed',
  },
  {
    word:'partly',
  },
  {
    word:'period',
  },
  {
    word:'phrase',
  },
  {
    word:'player',
  },
  {
    word:'pocket',
  },
  {
    word:'prefer',
  },
  {
    word:'prison',
  },
  {
    word:'proven',
  },
  {
    word:'palace',
  },
  {
    word:'patent',
  },
  {
    word:'permit',
  },
  {
    word:'piked',
  },
  {
    word:'please',
  },
  {
    word:'police',
  },
  {
    word:'pretty',
  },
  {
    word:'profit',
  },
  {
    word:'public',
  },
  {
    word:'rarely',
  },
  {
    word:'reader',
  },
  {
    word:'recall',
  },
  {
    word:'reduce',
  },
  {
    word:'regime',
  },
  {
    word:'releif',
  },
  {
    word:'remove',
  },
  {
    word:'replay',
  },
  {
    word:'resort',
  },
  {
    word:'retain',
  },
  {
    word:'review',
  },
  {
    word:'rising',
  },
  {
    word:'raised',
  },
  {
    word:'rather',
  },
  {
    word:'really',
  },
  {
    word:'recent',
  },
  {
    word:'reform',
  },
  {
    word:'region',
  },
  {
    word:'remain',
  },
  {
    word:'repair',
  },
  {
    word:'report',
  },
  {
    word:'result',
  },
  {
    word:'return',
  },
  {
    word:'reward',
  },
  {
    word:'robust',
  },
  {
    word:'random',
  },
  {
    word:'rating',
  },
  {
    word:'reason',
  },
  {
    word:'record',
  },
  {
    word:'regard',
  },
  {
    word:'relate',
  },
  {
    word:'remote',
  },
  {
    word:'repeat',
  },
  {
    word:'rescue',
  },
  {
    word:'retail',
  },
  {
    word:'reveal',
  },
  {
    word:'riding',
  },
  {
    word:'ruling',
  },
  {
    word:'safety',
  },
  {
    word:'saving',
  },
  {
    word:'school',
  },
  {
    word:'season',
  },
  {
    word:'sector',
  },
  {
    word:'select',
  },
  {
    word:'series',
  },
  {
    word:'severe',
  },
  {
    word:'signal',
  },
  {
    word:'silver',
  },
  {
    word:'single',
  },
  {
    word:'smooth',
  },
  {
    word:'sought',
  },
  {
    word:'speech',
  },
  {
    word:'spread',
  },
  {
    word:'stable',
  },
  {
    word:'stolen',
  },
  {
    word:'street',
  },
  {
    word:'strike',
  },
  {
    word:'struck',
  },
  {
    word:'sudden',
  },
  {
    word:'summit',
  },
  {
    word:'survey',
  },
  {
    word:'system',
  },
  {
    word:'salary',
  },
  {
    word:'saying ',
  },
  {
    word:'screen',
  },
  {
    word:'second',
  },
  {
    word:'secure',
  },
  {
    word:'seller',
  },
  {
    word:'server',
  },
  {
    word:'signed',
  },
  {
    word:'simple',
  },
  {
    word:'sister',
  },
  {
    word:'social',
  },
  {
    word:'source',
  },
  {
    word:'spirit',
  },
  {
    word:'spring',
  },
  {
    word:'status',
  },
  {
    word:'strain',
  },
  {
    word:'stress',
  },
  {
    word:'string',
  },
  {
    word:'studio',
  },
  {
    word:'suffer',
  },
  {
    word:'supply',
  },
  {
    word:'switch',
  },
  {
    word:'sample',
  },
  {
    word:'scheme',
  },
  {
    word:'search',
  },
  {
    word:'secret',
  },
  {
    word:'seeing',
  },
  {
    word:'senior',
  },
  {
    word:'settle',
  },
  {
    word:'should',
  },
  {
    word:'silent',
  },
  {
    word:'simply',
  },
  {
    word:'slight',
  },
  {
    word:'solely',
  },
  {
    word:'spoken',
  },
  {
    word:'square',
  },
  {
    word:'steady',
  },
  {
    word:'stream',
  },
  {
    word:'strict',
  },
  {
    word:'strong',
  },
  {
    word:'submit',
  },
  {
    word:'summer',
  },
  {
    word:'surely',
  },
  {
    word:'symbol',
  },
  {
    word:'target',
  },
  {
    word:'tender',
  },
  {
    word:'theory',
  },
  {
    word:'threat',
  },
  {
    word:'timely',
  },
  {
    word:'toward',
  },
  {
    word:'trying',
  },
  {
    word:'taking',
  },
  {
    word:'taught',
  },
  {
    word:'tennis',
  },
  {
    word:'thirty',
  },
  {
    word:'thrown',
  },
  {
    word:'timing',
  },
  {
    word:'travel',
  },
  {
    word:'twelve',
  },
  {
    word:'talent',
  },
  {
    word:'tenant',
  },
  {
    word:'thanks',
  },
  {
    word:'though',
  },
  {
    word:'ticket',
  },
  {
    word:'tissue',
  },
  {
    word:'treaty',
  },
  {
    word:'twenty',
  },
  {
    word:'unable',
  },
  {
    word:'unless',
  },
  {
    word:'useful',
  },
  {
    word:'unique',
  },
  {
    word:'unlike',
  },
  {
    word:'united',
  },
  {
    word:'update',
  },
  {
    word:'vendor',
  },
  {
    word:'vision',
  },
  {
    word:'valley',
  },
  {
    word:'versus',
  },
  {
    word:'visual',
  },
  {
    word:'varied',
  },
  {
    word:'victim',
  },
  {
    word:'volume',
  },
  {
    word:'walker',
  },
  {
    word:'weight',
  },
  {
    word:'winner',
  },
  {
    word:'wonder',
  },
  {
    word:'writer',
  },
  {
    word:'wealth',
  },
  {
    word:'wholly',
  },
  {
    word:'winter',
  },
  {
    word:'worker',
  },
  {
    word:'weekly',
  },
  {
    word:'window',
  },
  {
    word:'within',
  },
  {
    word:'wright',
  },
  {
    word:'yellow',
  }

];

const seedWords = () => StartPage.bulkCreate(wordBank);

module.exports = seedWords;
