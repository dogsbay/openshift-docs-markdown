{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring a supported builder image {id="mirroring-a-supported-builder-image_{{ context }}"}

To use npm packages for Node.js dependencies and Maven packages for Java dependencies and configure a runtime environment for your application, you must mirror a respective builder image from the mirror registry.

**Procedure**

1.  Verify that the required images tag is not imported:
    ```terminal
    $ oc describe is nodejs -n openshift
    ```
    ```terminal title="Example output"
    Name:                   nodejs
    Namespace:              openshift
    [...]

    10
      tagged from <mirror-registry>:<port>/rhoar-nodejs/nodejs-10
        prefer registry pullthrough when referencing this tag

      Build and run Node.js 10 applications on RHEL 7. For more information about using this builder image, including OpenShift considerations, see https://github.com/nodeshift/centos7-s2i-nodejs.
      Tags: builder, nodejs, hidden
      Example Repo: https://github.com/sclorg/nodejs-ex.git

      ! error: Import failed (NotFound): dockerimage.image.openshift.io "<mirror-registry>:<port>/rhoar-nodejs/nodejs-10:latest" not found
          About an hour ago

    10-SCL (latest)
      tagged from <mirror-registry>:<port>/rhscl/nodejs-10-rhel7
        prefer registry pullthrough when referencing this tag

      Build and run Node.js 10 applications on RHEL 7. For more information about using this builder image, including OpenShift considerations, see https://github.com/nodeshift/centos7-s2i-nodejs.
      Tags: builder, nodejs
      Example Repo: https://github.com/sclorg/nodejs-ex.git

      ! error: Import failed (NotFound): dockerimage.image.openshift.io "<mirror-registry>:<port>/rhscl/nodejs-10-rhel7:latest" not found
          About an hour ago

    [...]
    ```
1.  Mirror the supported image tag to the private registry:
    ```terminal
    $ oc image mirror registry.access.redhat.com/rhscl/nodejs-10-rhel7:<tag> <private_registry>/rhscl/nodejs-10-rhel7:<tag>
    ```
1.  Import the image:
    ```terminal
    $ oc tag <mirror-registry>:<port>/rhscl/nodejs-10-rhel7:<tag> nodejs-10-rhel7:latest --scheduled
    ```

    You must periodically re-import the image. The `--scheduled` flag enables automatic re-import of the image.
1.  Verify that the images with the given tag have been imported:
    ```terminal
    $ oc describe is nodejs -n openshift
    ```
    ```terminal title="Example output"
    Name:                   nodejs
    [...]
    10-SCL (latest)
      tagged from <mirror-registry>:<port>/rhscl/nodejs-10-rhel7
        prefer registry pullthrough when referencing this tag

      Build and run Node.js 10 applications on RHEL 7. For more information about using this builder image, including OpenShift considerations, see https://github.com/nodeshift/centos7-s2i-nodejs.
      Tags: builder, nodejs
      Example Repo: https://github.com/sclorg/nodejs-ex.git

      * <mirror-registry>:<port>/rhscl/nodejs-10-rhel7@sha256:d669ecbc11ac88293de50219dae8619832c6a0f5b04883b480e073590fab7c54
          3 minutes ago

    [...]
    ```