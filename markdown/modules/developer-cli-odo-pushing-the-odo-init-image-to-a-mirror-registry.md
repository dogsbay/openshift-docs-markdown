{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pushing the `odo` init image to a mirror registry {id="pushing-the-odo-init-image-to-a-mirror-registry_{{ context }}"}

Depending on your operating system, you can push the `odo` init image to a cluster with a mirror registry as follows:

## Pushing the init image to a mirror registry on Linux {id="pushing-the-init-image-to-a-mirror-registry-on-linux_{{ context }}"}

**Procedure**

1.  Use `base64` to encode the root certification authority (CA) content of your mirror registry:
    ```terminal
    $ echo <content_of_additional_ca> | base64 --decode > disconnect-ca.crt
    ```
1.  Copy the encoded root CA certificate to the appropriate location:
    ```terminal
    $ sudo cp ./disconnect-ca.crt /etc/pki/ca-trust/source/anchors/<mirror-registry>.crt
    ```
1.  Trust a CA in your client platform and log in to the {{ product_title }} mirror registry:
    ```terminal
    $ sudo update-ca-trust enable && sudo systemctl daemon-reload && sudo systemctl restart / docker && docker login <mirror-registry>:5000 -u <username> -p <password>
    ```
1.  Mirror the `odo` init image:
    ```terminal
    $ oc image mirror registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:<tag> <mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>
    ```
1.  Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:
    ```terminal
    $ export ODO_BOOTSTRAPPER_IMAGE=<mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>
    ```

## Pushing the init image to a mirror registry on MacOS {id="pushing-the-init-image-to-a-mirror-registry-on-macos_{{ context }}"}

**Procedure**

1.  Use `base64` to encode the root certification authority (CA) content of your mirror registry:
    ```terminal
    $ echo <content_of_additional_ca> | base64 --decode > disconnect-ca.crt
    ```
1.  Copy the encoded root CA certificate to the appropriate location:
    1.  Restart Docker using the Docker UI.
    1.  Run the following command:
        ```terminal
        $ docker login <mirror-registry>:5000 -u <username> -p <password>
        ```
1.  Mirror the `odo` init image:
    ```terminal
    $ oc image mirror registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:<tag> <mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>
    ```
1.  Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:
    ```terminal
    $ export ODO_BOOTSTRAPPER_IMAGE=<mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>
    ```

## Pushing the init image to a mirror registry on Windows {id="pushing-the-init-image-to-a-mirror-registry-on-windows_{{ context }}"}

**Procedure**

1.  Use `base64` to encode the root certification authority (CA) content of your mirror registry:
    ```terminal
    PS C:\> echo <content_of_additional_ca> | base64 --decode > disconnect-ca.crt
    ```
1.  As an administrator, copy the encoded root CA certificate to the appropriate location by executing the following command:
    ```terminal
    PS C:\WINDOWS\system32> certutil -addstore -f "ROOT" disconnect-ca.crt
    ```
1.  Trust a CA in your client platform and log in to the {{ product_title }} mirror registry:
    1.  Restart Docker using the Docker UI.
    1.  Run the following command:
        ```terminal
        PS C:\WINDOWS\system32> docker login <mirror-registry>:5000 -u <username> -p <password>
        ```
1.  Mirror the `odo` init image:
    ```terminal
    PS C:\> oc image mirror registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:<tag> <mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>
    ```
1.  Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:
    ```terminal
    PS C:\> $env:ODO_BOOTSTRAPPER_IMAGE="<mirror-registry>:5000/openshiftdo/odo-init-image-rhel7:<tag>"
    ```