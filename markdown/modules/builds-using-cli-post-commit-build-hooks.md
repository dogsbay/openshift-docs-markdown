{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the CLI to set post commit build hooks {id="builds-using-cli-post-commit-build-hooks_{{ context }}"}

The `oc set build-hook` command can be used to set the build hook for a build configuration.

**Procedure**

1.  Complete one of the following actions:
    *   To set a command as the post-commit build hook, enter the following command:
        ```terminal
        $ oc set build-hook bc/mybc \
            --post-commit \
            --command \
            -- bundle exec rake test --verbose
        ```
    *   To set a script as the post-commit build hook, enter the following command:
        ```terminal
        $ oc set build-hook bc/mybc --post-commit --script="bundle exec rake test --verbose"
        ```