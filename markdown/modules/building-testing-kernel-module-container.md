{%- set _mod_docs_content_type = "PROCEDURE" %}
# Building and testing the kernel module container {id="building-testing-kernel-module-container_{{ context }}"}

Before deploying kernel modules to your {{ product_title }} cluster, you can test the process on a separate {{ op_system_base }} system.  {._abstract}

Before testing the process, gather the source code for the kernal module, the KVC framework, and the `kmod-via-containers` software. You can then build and test a module on a {{ op_system_base }} system.

**Procedure**

1.  Register a {{ op_system_base }} 8 system:
    ```terminal
    # subscription-manager register
    ```
1.  Attach a subscription to the {{ op_system_base }} 8 system:
    ```terminal
    # subscription-manager attach --auto
    ```
1.  Install software that is required to build the software and container:
    ```terminal
    # yum install podman make git -y
    ```
1.  Clone the `kmod-via-containers` repository.
    1.  Create a folder for the repository:
        ```terminal
        $ mkdir kmods; cd kmods
        ```
    1.  Clone the repository:
        ```terminal
        $ git clone https://github.com/kmods-via-containers/kmods-via-containers
        ```
1.  Install a KVC framework instance on your RHEL 8 build host to test the module. This adds a `kmods-via-container` systemd service and loads it:
    1.  Change to the `kmod-via-containers` directory:
        ```terminal
        $ cd kmods-via-containers/
        ```
    1.  Install the KVC framework instance:
        ```terminal
        $ sudo make install
        ```
    1.  Reload the systemd manager configuration:
        ```terminal
        $ sudo systemctl daemon-reload
        ```
1.  Get the kernel module source code. The source code might be used to build a third-party module that you do not have control over, but is supplied by others. You will need content similar to the content shown in the `kvc-simple-kmod` example that can be cloned to your system as follows:
    ```terminal
    $ cd .. ; git clone https://github.com/kmods-via-containers/kvc-simple-kmod
    ```
1.  Edit the configuration file, `simple-kmod.conf` file, in this example, and
change the name of the Dockerfile to `Dockerfile.rhel`:
    1.  Change to the `kvc-simple-kmod` directory:
        ```terminal
        $ cd kvc-simple-kmod
        ```
    1.  Rename the Dockerfile:
        ```terminal
        $ cat simple-kmod.conf
        ```
        ```terminal title="Example Dockerfile"
        KMOD_CONTAINER_BUILD_CONTEXT="https://github.com/kmods-via-containers/kvc-simple-kmod.git"
        KMOD_CONTAINER_BUILD_FILE=Dockerfile.rhel
        KMOD_SOFTWARE_VERSION=dd1a7d4
        KMOD_NAMES="simple-kmod simple-procfs-kmod"
        ```
1.  Create an instance of `kmods-via-containers@.service` for your kernel module,
`simple-kmod` in this example:
    ```terminal
    $ sudo make install
    ```
1.  Enable the `kmods-via-containers@.service` instance:
    ```terminal
    $ sudo kmods-via-containers build simple-kmod $(uname -r)
    ```
1.  Enable and start the systemd service:
    ```terminal
    $ sudo systemctl enable kmods-via-containers@simple-kmod.service --now
    ```
    1.  Review the service status:
        ```terminal
        $ sudo systemctl status kmods-via-containers@simple-kmod.service
        ```
        ```terminal title="Example output"
        ● kmods-via-containers@simple-kmod.service - Kmods Via Containers - simple-kmod
           Loaded: loaded (/etc/systemd/system/kmods-via-containers@.service;
                  enabled; vendor preset: disabled)
           Active: active (exited) since Sun 2020-01-12 23:49:49 EST; 5s ago...
        ```
1.  To confirm that the kernel modules are loaded, use the `lsmod` command to list the modules:
    ```terminal
    $ lsmod | grep simple_
    ```
    ```terminal title="Example output"
    simple_procfs_kmod     16384  0
    simple_kmod            16384  0
    ```
1.  Optional. Use other methods to check that the `simple-kmod` example is working.
    *   Look for a "Hello world" message in the kernel ring buffer with `dmesg`:
        ```terminal
        $ dmesg | grep 'Hello world'
        ```
        ```terminal title="Example output"
        [ 6420.761332] Hello world from simple_kmod.
        ```
    *   Check the value of `simple-procfs-kmod` in `/proc`:
        ```terminal
        $ sudo cat /proc/simple-procfs-kmod
        ```
        ```terminal title="Example output"
        simple-procfs-kmod number = 0
        ```
    *   Run the `spkut` command to get more information from the module:
        ```terminal
        $ sudo spkut 44
        ```
        ```terminal title="Example output"
        KVC: wrapper simple-kmod for 4.22.0-147.3.1.el8_1.x86_64
        Running userspace wrapper using the kernel module container...
        + podman run -i --rm --privileged
           simple-kmod-dd1a7d4:4.22.0-147.3.1.el8_1.x86_64 spkut 44
        simple-procfs-kmod number = 0
        simple-procfs-kmod number = 44
        ```

**Results**

After the system boots, the service checks if a new kernel is running. If there is a new kernel, the service builds a new version of the kernel module and then loads it. If the module is already built, it will just load it.