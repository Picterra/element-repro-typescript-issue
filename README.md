# Reproduction repo for typechecking issue with typescript 4.9.5 on ElementUI

Steps:

    npm install
    npm run lint


This will fail with:

    element-repro-typescript-issue (master) $ npm run lint

    > lint
    > vue-tsc --noEmit --diagnostics

    node_modules/element-ui/types/element-ui.d.ts:310:60 - error TS2344: Type 'D' does not satisfy the constraint 'TreeData'.

    310 export class Tree<K = any, D = TreeData> extends ElTree<K, D> {}
                                                                ~

    node_modules/element-ui/types/element-ui.d.ts:310:28
        310 export class Tree<K = any, D = TreeData> extends ElTree<K, D> {}
                                    ~~~~~~~~~~~~
        This type parameter might need an `extends TreeData` constraint.


    Found 1 error in node_modules/element-ui/types/element-ui.d.ts:310

    Files:              108
    Lines:            30293
    Identifiers:      46614
    Symbols:          37072
    Types:            14589
    Instantiations:    5419
    Memory used:    186490K
    I/O read:         0.00s
    I/O write:        0.00s
    Parse time:       0.00s
    Bind time:        0.00s
    Check time:       0.00s
    Emit time:        0.00s
    Total time:       0.00s


Based on 'element-starter'