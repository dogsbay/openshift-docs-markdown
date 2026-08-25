{% if context == "mirroring-ocp-image-repository" %}
{%- set restricted = true -%}
{%- set update_oc_mirror = true -%}
{% endif %}

{% if context == "installing-mirroring-installation-images" %}
{%- set restricted = true -%}
{% endif %}

{% if context == "installing-mirroring-disconnected" %}
{%- set restricted = true -%}
{%- set oc_mirror = true -%}
{% endif %}

{% if context == "about-installing-oc-mirror-v2" %}
{%- set oc_mirror_v2 = true -%}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring credentials that allow images to be mirrored {id="installation-adding-registry-pull-secret_{{ context }}"}

Create a container image registry credentials file so that you can mirror images from Red&#160;Hat to your mirror. Complete the following steps on the installation host. {._abstract}

{% if restricted %}

:::warning

Do not use this image registry credentials file as the pull secret when you install a cluster. If you provide this file when you install cluster, all of the machines in the cluster will have write access to your mirror registry.

:::

{% endif %}

**Prerequisites**

{%- if not (openshift_rosa or openshift_dedicated) %}
*   You configured a mirror registry to use in your disconnected environment.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You configured a mirror registry to use.
{% endif %}
{% if restricted %}
*   You identified an image repository location on your mirror registry to mirror images into.
*   You provisioned a mirror registry account that allows images to be uploaded to that image repository.
*   You have write access to the mirror registry.
{% endif %}

**Procedure**

{%- if not openshift_origin %}
1.  Download your `registry.redhat.io` {{ cluster_manager_url_pull }}.
1.  Make a copy of your pull secret in JSON format by running the following command:
    ```terminal
    $ cat ./pull-secret | jq . > <path>/<pull_secret_file_in_json>
    ```

    Specify the path to the directory to store the pull secret in and a name for the JSON file that you create.
    ```json title="Example pull secret"
    {
      "auths": {
        "cloud.openshift.com": {
          "auth": "b3BlbnNo...",
          "email": "you@example.com"
        },
        "quay.io": {
          "auth": "b3BlbnNo...",
          "email": "you@example.com"
        },
        "registry.connect.redhat.com": {
          "auth": "NTE3Njg5Nj...",
          "email": "you@example.com"
        },
        "registry.redhat.io": {
          "auth": "NTE3Njg5Nj...",
          "email": "you@example.com"
        }
      }
    }
    ```
{%- if oc_mirror %}
1.  Save the file as either `~/.docker/config.json` or `$XDG_RUNTIME_DIR/containers/auth.json`:
    1.  If the `.docker` or `$XDG_RUNTIME_DIR/containers` directories do not exist, create one by entering the following command:
        ```terminal
        $ mkdir -p <directory_name>
        ```

        Where `<directory_name>` is either `~/.docker` or `$XDG_RUNTIME_DIR/containers`.
    1.  Copy the pull secret to the appropriate directory by entering the following command:
        ```terminal
        $ cp <path>/<pull_secret_file_in_json> <directory_name>/<auth_file>
        ```

        The `<directory_name>` is either `~/.docker` or `$XDG_RUNTIME_DIR/containers`, and `<auth_file>` is either `config.json` or `auth.json`
{% endif %}
{% if update_oc_mirror %}
1.  Optional: If using the oc-mirror plugin, save the file as either `~/.docker/config.json` or `$XDG_RUNTIME_DIR/containers/auth.json`:

    	
    *   If the `.docker` or `$XDG_RUNTIME_DIR/containers` directories do not exist, create one by entering the following command:
        ```terminal
        $ mkdir -p <directory_name>
        ```

        Where `<directory_name>` is either `~/.docker` or `$XDG_RUNTIME_DIR/containers`.
    *   Copy the pull secret to the appropriate directory by entering the following command:
        ```terminal
        $ cp <path>/<pull_secret_file_in_json> <directory_name>/<auth_file>
        ```

        Where `<directory_name>` is either `~/.docker` or `$XDG_RUNTIME_DIR/containers`, and `<auth_file>` is either `config.json` or `auth.json`.

{% endif %}
{% if oc_mirror_v2 %}
1.  If the `$XDG_RUNTIME_DIR/containers` directory does not exist, create one by entering the following command:
    ```terminal
    $ mkdir -p $XDG_RUNTIME_DIR/containers
    ```
1.  Save the pull secret file as `$XDG_RUNTIME_DIR/containers/auth.json`.
{% endif %}
{% endif %}
1.  Generate the base64-encoded user name and password or token for your mirror registry by running the following command:
    ```terminal
    $ echo -n '<user_name>:<password>' | base64 -w0
    ```

    For `<user_name>` and `<password>`, specify the user name and password that you configured for your registry.
    ```terminal title="Example output"
    BGVtbYk3ZHAtqXs=
    ```

{% if openshift_origin %}
1.  Create a `.json` file and add a section that describes your registry to it:
    ```json
    {
      "auths": {
        "<mirror_registry>": {
          "auth": "<credentials>",
          "email": "you@example.com"
        }
      }
    }
    ```
    *   For the `<mirror_registry>` value, specify the registry domain name, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:8443`.
    *   For the `<credentials>` value, specify the base64-encoded user name and password for the mirror registry.

{% endif %}

{% if not openshift_origin %}
1.  Edit the JSON file and add a section that describes your registry to it:
    ```json
      "auths": {
        "<mirror_registry>": {
          "auth": "<credentials>",
          "email": "you@example.com"
        }
      },
    ```
    *   For the `<mirror_registry>` value, specify the registry domain name, and optionally the port, that your mirror registry uses to serve content. For example, `registry.example.com` or `registry.example.com:8443`.
    *   For the `<credentials>` value, specify the base64-encoded user name and password for the mirror registry.
        ```json title="Example modified pull secret"
        {
          "auths": {
            "registry.example.com": {
              "auth": "BGVtbYk3ZHAtqXs=",
              "email": "you@example.com"
            },
            "cloud.openshift.com": {
              "auth": "b3BlbnNo...",
              "email": "you@example.com"
            },
            "quay.io": {
              "auth": "b3BlbnNo...",
              "email": "you@example.com"
            },
            "registry.connect.redhat.com": {
              "auth": "NTE3Njg5Nj...",
              "email": "you@example.com"
            },
            "registry.redhat.io": {
              "auth": "NTE3Njg5Nj...",
              "email": "you@example.com"
            }
          }
        }
        ```
{% endif %}

{% if context == "installing-mirroring-installation-images" %}
{%- set restricted = false -%}
{% endif %}

{% if context == "mirroring-ocp-image-repository" %}
{%- set restricted = false -%}
{%- set update_oc_mirror = false -%}
{% endif %}

{% if context == "installing-mirroring-disconnected" %}
{%- set restricted = false -%}
{%- set oc_mirror = false -%}
{% endif %}

{% if context == "about-installing-oc-mirror-v2" %}
{%- set oc_mirror_v2 = false -%}
{%- set restricted = false -%}
{% endif %}