const path = require('path');
const helpers = require('yeoman-test');

describe('jhipster-jooq:common sub-generator (Common blueprint)', function () {
    this.timeout(30000);
    describe('Sample test', () => {
        let runResult;
        before(() => {
            return helpers
                .create('jhipster:common')
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    defaults: true,
                    blueprints: 'jooq',
                })
                .withLookups([{ npmPaths: path.join(__dirname, '..', 'node_modules') }, { packagePaths: path.join(__dirname, '..') }])
                .run()
                .then(result => {
                    runResult = result;
                });
        });

        it('writes README', () => {
            runResult.assertFile('README.jooq.md');
        });
    });
});
