{%- set _mod_docs_content_type = "PROCEDURE" %}
# Defining parameters for the installation program {id="installation-osp-describing-cloud-parameters_{{ context }}"}

The {{ product_title }} installation program relies on a file that is called `clouds.yaml`. The file describes {{ rh_openstack_first }} configuration parameters, including the project name, log in information, and authorization service URLs. {._abstract}

**Procedure**

1.  Create the `clouds.yaml` file:
    *   If your {{ rh_openstack }} distribution includes the Horizon web UI, generate a `clouds.yaml` file.

        :::important

        Remember to add a password to the `auth` field. You can also keep secrets in [a separate file](https://docs.openstack.org/os-client-config/latest/user/configuration.html#splitting-secrets) from `clouds.yaml`.
        
        :::

    *   If your {{ rh_openstack }} distribution does not include the Horizon web UI, or you do not want to use Horizon, create the file yourself. For detailed information about `clouds.yaml`, see [Config files](https://docs.openstack.org/openstacksdk/latest/user/config/configuration.html#config-files) in the {{ rh_openstack }} documentation.
        ```yaml
        clouds:
          shiftstack:
            auth:
              auth_url: http://10.10.14.42:5000/v3
              project_name: shiftstack
              username: <username>
              password: <password>
              user_domain_name: Default
              project_domain_name: Default
          dev-env:
            region_name: RegionOne
            auth:
              username: <username>
              password: <password>
              project_name: 'devonly'
              auth_url: 'https://10.10.14.22:5001/v2.0'
        ```
1.  If your {{ rh_openstack }} installation uses self-signed certificate authority (CA) certificates for endpoint authentication:
    1.  Copy the certificate authority file to your machine.
    1.  Add the `cacerts` key to the `clouds.yaml` file. The value must be an absolute, non-root-accessible path to the CA certificate:
        ```yaml
        clouds:
          shiftstack:
            ...
            cacert: "/etc/pki/ca-trust/source/anchors/ca.crt.pem"
        ```

        :::tip

        After you run the installation program with a custom CA certificate, you can update the certificate by editing the value of the `ca-cert.pem` key in the `cloud-provider-config` keymap. You can then enter the following command:

        ```terminal
        $ oc edit configmap -n openshift-config cloud-provider-config
        ```
        
        :::

1.  Place the `clouds.yaml` file in one of the following locations:
    1.  The value of the `OS_CLIENT_CONFIG_FILE` environment variable
    1.  The current directory
    1.  A Unix-specific user configuration directory, for example `~/.config/openstack/clouds.yaml`
    1.  A Unix-specific site configuration directory, for example `/etc/openstack/clouds.yaml`

        The installation program searches for `clouds.yaml` in that order.