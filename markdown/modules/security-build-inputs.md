{%- set _mod_docs_content_type = "PROCEDURE" %}
# Securing inputs during builds {id="security-build-inputs_{{ context }}"}

You can protect sensitive credentials required during builds by defining input secrets that give access to dependent resources without exposing those credentials in the final application image. {._abstract}

In some scenarios, build operations require credentials to access dependent resources, but it is undesirable for those credentials to be available in the final application image produced by the build. You can define input secrets for this purpose.

For example, when building a Node.js application, you can set up your private mirror for Node.js modules. To download modules from that private mirror, you must supply a custom `.npmrc` file for the build that has a URL, user name, and password. For security reasons, you do not want to expose your credentials in the application image.

Using this example scenario, you can add an input secret to a new `BuildConfig` object.

**Procedure**

1.  Create the secret, if it does not exist:
    ```terminal
    $ oc create secret generic secret-npmrc --from-file=.npmrc=~/.npmrc
    ```

    This creates a new secret named `secret-npmrc`, which has the base64 encoded content of the `~/.npmrc` file.
1.  Add the secret to the `source` section in the existing `BuildConfig` object:
    ```yaml
    source:
      git:
        uri: https://github.com/sclorg/nodejs-ex.git
      secrets:
      - destinationDir: .
        secret:
          name: secret-npmrc
    ```
1.  To include the secret in a new `BuildConfig` object, run the following command:
    ```terminal
    $ oc new-build \
        openshift/nodejs-010-centos7~https://github.com/sclorg/nodejs-ex.git \
        --build-secret secret-npmrc
    ```