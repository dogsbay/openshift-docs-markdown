{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use source-to-image environment files {id="builds-strategy-s2i-environment-files_{{ context }}"}

Source build enables you to set environment values, one per line, inside your application, by specifying them in a `.s2i/environment` file in the source repository. The environment variables specified in this file are present during the build process and in the output image. {._abstract}

If you provide a `.s2i/environment` file in your source repository, source-to-image (S2I) reads this file during the build. This allows customization of the build behavior as the `assemble` script may use these variables. The complete list of supported environment variables is available in the using images section for each image.

**Procedure**

1.  To disable assets compilation for your Rails application during the build, add the following line to the `.s2i/environment` file:
    ```text
    DISABLE_ASSET_COMPILATION=true
    ```
1.  In addition to builds, the specified environment variables are also available in the running application itself. To start the Rails application in `development` mode instead of `production` mode, add the following line to the `.s2i/environment` file:
    ```text
    RAILS_ENV=development
    ```