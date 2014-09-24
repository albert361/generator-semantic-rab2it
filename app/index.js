'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SemanticRab2itGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the gnarly SemanticRab2it generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        }];

        this.prompt(prompts, function(props) {
            this.someOption = props.someOption;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.dest.mkdir('app');
            this.dest.mkdir('app/styles');
            this.dest.mkdir('app/fonts');
            this.dest.mkdir('app/images');
            this.dest.mkdir('app/scripts');

            this.src.copy('_package.json', 'package.json');
            this.src.copy('_bower.json', 'bower.json');
            this.src.copy('_index.html', 'app/index.html');
            this.src.copy('styles/style.scss', 'app/styles/style.scss');
            this.src.copy('styles/grid-settings.scss', 'app/styles/grid-settings.scss');
            this.src.copy('scripts/script.js', 'app/scripts/script.js');
            this.src.copy('_Gruntfile.js', 'Gruntfile.js');

            /*
            this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
            this.gruntfile.registerTask('build', 'compass');
            // output: grunt.registerTask('build', ['compass']);

            this.gruntfile.registerTask('build', ['compass', 'uglify']);
            // output: grunt.registerTask('build', ['compass', 'uglify']);
            */
        },

        projectfiles: function() {
            this.src.copy('editorconfig', '.editorconfig');
            this.src.copy('jshintrc', '.jshintrc');
        }
    },

    end: function() {
        this.installDependencies();
    }
});

module.exports = SemanticRab2itGenerator;
