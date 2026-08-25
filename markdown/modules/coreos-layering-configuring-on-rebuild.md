{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rebuilding an on-cluster custom layered image {id="coreos-layering-configuring-on-rebuild_{{ context }}"}

You can rebuild an on-cluster custom layered image by either modifying your `MachineOSConfig` object or adding an annotation to the `MachineOSConfig` object. Both of these actions trigger an automatic rebuild of the object.  {._abstract}

For example, you could perform a rebuild if the you change the Containerfile or need to update the `osimageurl` location in a machine config.

After you add the annotation, the Machine Config Operator (MCO) deletes the current `MachineOSBuild` object and creates a new one in its place. When the build process is complete, the MCO automatically removes the annotation.

**Prerequisites**

*   You have opted-in to {{ image_mode_os_on_lower }} by creating a `MachineOSConfig` object.

**Procedure**

*   Edit the `MachineOSConfig` object to add the `machineconfiguration.openshift.io/rebuild` annotation by using the following command:
    ```terminal
    $ oc edit MachineOSConfig <object_name>
    ```
    ```yaml title="Example MachineOSConfig object"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineOSConfig
    metadata:
      annotations:
        machineconfiguration.openshift.io/current-machine-os-build: layering-c26d4a003432df70ee66c83981144cfa
        machineconfiguration.openshift.io/rebuild: ""
    # ...
      name: layered-image
    # ...
    ```

    Add the `machineconfiguration.openshift.io/rebuild: ""` annotation to trigger a rebuild of the custom layered image.

**Verification**

*   Check that the `MachineOSBuild` object is building by using the following command:
    ```terminal
    $ oc get machineosbuild
    ```
    ```terminal title="Example output"
    NAME                                             PREPARED   BUILDING   SUCCEEDED   INTERRUPTED   FAILED   AGE
    layered-image-d6b929a29c6dbfa8e4007c8069a2fd08   False      True       False       False         False    2m41s
    ```

    The value `True` in the `BUILDING` column indicates that the `MachineOSBuild` object is building.
*   Edit the `MachineOSConfig` object to verify that the MCO removed the `machineconfiguration.openshift.io/rebuild` annotation by using the following command:
    ```terminal
    $ oc edit MachineOSConfig <object_name>
    ```
    ```yaml title="Example MachineOSConfig object"
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineOSConfig
    metadata:
      annotations:
        machineconfiguration.openshift.io/current-machine-os-build: layering-c26d4a003432df70ee66c83981144cfa
    # ...
      name: layered-image
    # ...
    ```