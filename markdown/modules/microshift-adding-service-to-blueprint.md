{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add the {{ microshift_short }} service to a blueprint {id="adding-microshift-service-to-blueprint_{{ context }}"}

Adding the {{ microshift_short }} RPM package to an image builder blueprint enables the build of a {{ op_system_ostree }} image with {{ microshift_short }} embedded. {._abstract}

**Procedure**

1.  Use the blueprint installed in the `/usr/share/microshift/blueprint` directory that is specific to your platform architecture. See the following example snippet for an explanation of the blueprint sections:
    ```text title="Generated image builder blueprint example snippet" {minja}
    name = "microshift_blueprint"
    description = "MicroShift {{ ocp_version }}.1 on x86_64 platform"
    version = "0.0.1"
    modules = []
    groups = []

    [[packages]]
    name = "microshift"
    version = "{{ ocp_version }}.1"
    ...
    ...

    [customizations.services]
    enabled = ["microshift"]

    [customizations.firewall]
    ports = ["ssh"]
    ...
    ...

    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:f41e79c17e8b41f1b0a5a32c3e2dd7cd15b8274554d3f1ba12b2598a347475f4"

    [[containers]]
    source = "quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:dbc65f1fba7d92b36cf7514cd130fe83a9bd211005ddb23a8dc479e0eea645fd"
    ...
    …
    EOF
    ```
    *   `\<a name="packages"></a> name = "microshift"`: references for all non-optional {{ microshift_short }} RPM packages using the same version compatible with the `microshift-release-info` RPM.
    *   `[customizations.services] enabled = ["microshift"]`: references for automatically enabling {{ microshift_short }} on system startup and applying default networking settings.
    *   `\<a name="containers"></a> source = "quay.io/openshift-release-dev/...`: references for all non-optional {{ microshift_short }} container images necessary for an offline deployment. The SHA depends on the release you are using.
1.  Add the blueprint to the image builder by running the following command:
    ```terminal
    $ sudo composer-cli blueprints push microshift_blueprint.toml
    ```

**Verification**

1.  Verify the image builder configuration listing only {{ microshift_short }} packages by running the following command:
    ```terminal
    $ sudo composer-cli blueprints depsolve microshift_blueprint | grep microshift
    ```
    ```terminal title="Example output" {minja}
    blueprint: microshift_blueprint v0.0.1
        microshift-release-info-{{ ocp_version }}.1-202511250827.p0.g4105d3b.assembly.{{ ocp_version }}.1.el9.noarch
        microshift-{{ ocp_version }}.1-202511250827.p0.g4105d3b.assembly.{{ ocp_version }}.1.el9.x86_64
    ```
1.  Optional: Verify the image builder configuration that lists all of the components to be installed by running the following command:
    ```terminal
    $ sudo composer-cli blueprints depsolve microshift_blueprint
    ```