{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding Red Hat Satellite configurations to builds {id="builds-source-input-satellite-config_{{ context }}"}

Builds that use Red Hat Satellite to install content must provide appropriate configurations to obtain content from Satellite repositories.

**Prerequisites**

*   You must provide or create a `yum`-compatible repository configuration file that downloads content from your Satellite instance.
    ```terminal title="Sample repository configuration"
    [test-<name>]
    name=test-<number>
    baseurl = https://satellite.../content/dist/rhel/server/7/7Server/x86_64/os
    enabled=1
    gpgcheck=0
    sslverify=0
    sslclientkey = /etc/pki/entitlement/...-key.pem
    sslclientcert = /etc/pki/entitlement/....pem
    ```

**Procedure**

1.  Create a `ConfigMap` object containing the Satellite repository configuration file by entering the following command:
    ```terminal
    $ oc create configmap yum-repos-d --from-file /path/to/satellite.repo
    ```
1.  Add the Satellite repository configuration and entitlement key as a build volumes:
    ```yaml
    strategy:
      dockerStrategy:
        from:
          kind: ImageStreamTag
          name: ubi9:latest
        volumes:
        - name: yum-repos-d
          mounts:
          - destinationPath: /etc/yum.repos.d
          source:
            type: ConfigMap
            configMap:
              name: yum-repos-d
        - name: etc-pki-entitlement
          mounts:
          - destinationPath: /etc/pki/entitlement
          source:
            type: Secret
            secret:
              secretName: etc-pki-entitlement
    ```