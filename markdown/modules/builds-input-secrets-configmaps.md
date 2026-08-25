{%- set _mod_docs_content_type = "CONCEPT" %}
# Input secrets and config maps {id="builds-input-secrets-configmaps_{{ context }}"}


:::important

To prevent the contents of input secrets and config maps from appearing in build output container images, use build volumes in your [Docker build](/cicd/builds/build-strategies#builds-using-build-volumes_build-strategies-docker) and [source-to-image build](/cicd/builds/build-strategies#builds-using-build-volumes_build-strategies-s2i) strategies.

:::


In some scenarios, build operations require credentials or other configuration data to access dependent resources, but it is undesirable for that information to be placed in source control. You can define input secrets and input config maps for this purpose.

For example, when building a Java application with Maven, you can set up a private mirror of Maven Central or JCenter that is accessed by private keys. To download libraries from that private mirror, you have to supply the
following:

1.  A `settings.xml` file configured with the mirror’s URL and connection settings.
1.  A private key referenced in the settings file, such as `~/.ssh/id_rsa`.

For security reasons, you do not want to expose your credentials in the application image.

This example describes a Java application, but you can use the same approach for adding SSL certificates into the `/etc/ssl/certs` directory, API keys or tokens, license files, and more.