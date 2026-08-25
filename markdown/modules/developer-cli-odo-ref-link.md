{%- set _mod_docs_content_type = "REFERENCE" %}
# odo link {id="odo-link_{{ context }}"}

The `odo link` command helps link an `odo` component to an Operator-backed service or another `odo` component. It does this by using the [Service Binding Operator](https://github.com/redhat-developer/service-binding-operator). Currently, `odo` makes use of the Service Binding library and not the Operator itself to achieve the desired functionality.

## Various linking options {id="_various_linking_options"}

`odo` provides various options for linking a component with an Operator-backed service or another `odo` component. All these options (or flags) can be used whether you are linking a component to a service or to another component.

### Default behavior {id="_default_behavior"}

By default, the `odo link` command creates a directory named `kubernetes/` in your component directory and stores the information (YAML manifests) about services and links there. When you use `odo push`, `odo` compares these manifests with the state of the resources on the Kubernetes cluster and decides whether it needs to create, modify or destroy resources to match what is specified by the user.

### The `--inlined` flag {id="_the_--inlined_flag"}

If you specify the `--inlined` flag to the `odo link` command, `odo` stores the link information inline in the `devfile.yaml` in the component directory, instead of creating a file under the `kubernetes/` directory. The behavior of the `--inlined` flag is similar in both the `odo link` and `odo service create` commands. This flag is helpful if you want everything stored in a single `devfile.yaml`. You have to remember to use `--inlined` flag with each `odo link` and `odo service create` command that you execute for the component.

### The `--map` flag {id="_the_--map_flag"}

Sometimes, you might want to add more binding information to the component, in addition to what is available by default. For example, if you are linking the component with a service and would like to bind some information from the service’s spec (short for specification), you could use the `--map` flag. Note that `odo` does not do any validation against the spec of the service or component being linked. Using this flag is only recommended if you are comfortable using the Kubernetes YAML manifests.

### The `--bind-as-files` flag {id="_the_--bind-as-files_flag"}

For all the linking options discussed so far, `odo` injects the binding information into the component as environment variables. If you would like to mount this information as files instead, you can use the `--bind-as-files` flag. This will make `odo` inject the binding information as files into the `/bindings` location within your component’s Pod. Compared to the environment variables scenario, when you use `--bind-as-files`, the files are named after the keys and the value of these keys is stored as the contents of these files.

## Examples {id="_examples"}

### Default `odo link` {id="_default_odo_link"}

In the following example, the backend component is linked with the PostgreSQL service using the default `odo link` command. For the backend component, make sure that your component and service are pushed to the cluster:

```terminal
$ odo list
```

```terminal title="Sample output"
APP     NAME        PROJECT       TYPE       STATE      MANAGED BY ODO
app     backend     myproject     spring     Pushed     Yes
```

```terminal
$ odo service list
```

```terminal title="Sample output"
NAME                      MANAGED BY ODO     STATE      AGE
PostgresCluster/hippo     Yes (backend)      Pushed     59m41s
```

Now, run `odo link` to link the backend component with the PostgreSQL service:

```terminal
$ odo link PostgresCluster/hippo
```

```terminal title="Example output"
 ✓  Successfully created link between component "backend" and service "PostgresCluster/hippo"

To apply the link, please use `odo push`
```

And then run `odo push` to actually create the link on the Kubernetes cluster.

After a successful `odo push`, you will see a few outcomes:

1.  When you open the URL for the application deployed by backend component, it shows a list of `todo` items in the database. For example, in the output for the `odo url list` command,  the path where `todos` are listed is included:
    ```terminal
    $ odo url list
    ```
    ```terminal title="Sample output"
    Found the following URLs for component backend
    NAME         STATE      URL                                       PORT     SECURE     KIND
    8080-tcp     Pushed     http://8080-tcp.192.168.39.112.nip.io     8080     false      ingress
    ```

    The correct path for the URL would be <span>http://</span>8080-tcp.192.168.39.112.nip.io/api/v1/todos. The exact URL depends on your setup. Also note that there are no `todos` in the database unless you add some, so the URL might just show an empty JSON object.
1.  You can see binding information related to the Postgres service injected into the backend component. This binding information is injected, by default, as environment variables. You can check it using the `odo describe` command from the backend component’s directory:
    ```terminal
    $ odo describe
    ```
    ```terminal title="Example output"
    Component Name: backend
    Type: spring
    Environment Variables:
      · PROJECTS_ROOT=/projects
      · PROJECT_SOURCE=/projects
      · DEBUG_PORT=5858
    Storage:
      · m2 of size 3Gi mounted to /home/user/.m2
    URLs:
      · http://8080-tcp.192.168.39.112.nip.io exposed via 8080
    Linked Services:
      · PostgresCluster/hippo
        Environment Variables:
        · POSTGRESCLUSTER_PGBOUNCER-EMPTY
        · POSTGRESCLUSTER_PGBOUNCER.INI
        · POSTGRESCLUSTER_ROOT.CRT
        · POSTGRESCLUSTER_VERIFIER
        · POSTGRESCLUSTER_ID_ECDSA
        · POSTGRESCLUSTER_PGBOUNCER-VERIFIER
        · POSTGRESCLUSTER_TLS.CRT
        · POSTGRESCLUSTER_PGBOUNCER-URI
        · POSTGRESCLUSTER_PATRONI.CRT-COMBINED
        · POSTGRESCLUSTER_USER
        · pgImage
        · pgVersion
        · POSTGRESCLUSTER_CLUSTERIP
        · POSTGRESCLUSTER_HOST
        · POSTGRESCLUSTER_PGBACKREST_REPO.CONF
        · POSTGRESCLUSTER_PGBOUNCER-USERS.TXT
        · POSTGRESCLUSTER_SSH_CONFIG
        · POSTGRESCLUSTER_TLS.KEY
        · POSTGRESCLUSTER_CONFIG-HASH
        · POSTGRESCLUSTER_PASSWORD
        · POSTGRESCLUSTER_PATRONI.CA-ROOTS
        · POSTGRESCLUSTER_DBNAME
        · POSTGRESCLUSTER_PGBOUNCER-PASSWORD
        · POSTGRESCLUSTER_SSHD_CONFIG
        · POSTGRESCLUSTER_PGBOUNCER-FRONTEND.KEY
        · POSTGRESCLUSTER_PGBACKREST_INSTANCE.CONF
        · POSTGRESCLUSTER_PGBOUNCER-FRONTEND.CA-ROOTS
        · POSTGRESCLUSTER_PGBOUNCER-HOST
        · POSTGRESCLUSTER_PORT
        · POSTGRESCLUSTER_ROOT.KEY
        · POSTGRESCLUSTER_SSH_KNOWN_HOSTS
        · POSTGRESCLUSTER_URI
        · POSTGRESCLUSTER_PATRONI.YAML
        · POSTGRESCLUSTER_DNS.CRT
        · POSTGRESCLUSTER_DNS.KEY
        · POSTGRESCLUSTER_ID_ECDSA.PUB
        · POSTGRESCLUSTER_PGBOUNCER-FRONTEND.CRT
        · POSTGRESCLUSTER_PGBOUNCER-PORT
        · POSTGRESCLUSTER_CA.CRT
    ```

    Some of these variables are used in the backend component’s `src/main/resources/application.properties` file so that the Java Spring Boot application can connect to the PostgreSQL database service.
1.  Lastly, `odo` has created a directory called `kubernetes/` in your backend component’s directory that contains the `odo-service-backend-postgrescluster-hippo.yaml` and `odo-service-hippo.yaml` files:
    ```terminal
    $ ls kubernetes
    ```

    These files contain the information (YAML manifests) for two resources:
    1.  `odo-service-hippo.yaml` - the Postgres _service_ created using `odo service create --from-file ../postgrescluster.yaml` command.
    1.  `odo-service-backend-postgrescluster-hippo.yaml` - the _link_ created using `odo link` command.

### Using odo link with the --inlined flag {id="_using_odo_link_with_the_--inlined_flag"}

Using the `--inlined` flag with the `odo link` command has the same effect as an `odo link` command without the flag, in that it injects binding information. However, the subtle difference is that in the above case, there are two manifest files under `kubernetes/` directory, one for the Postgres service and another for the link between the backend component and this service. However, when you pass the `--inlined` flag, `odo` does not create a file under the `kubernetes/` directory to store the YAML manifest, but rather stores it inline in the `devfile.yaml` file.

To see this, unlink the component from the PostgreSQL service first:

```terminal
$ odo unlink PostgresCluster/hippo
```

```terminal title="Example output"
 ✓  Successfully unlinked component "backend" from service "PostgresCluster/hippo"

To apply the changes, please use `odo push`
```

To unlink them on the cluster, run `odo push`. Now if you inspect the `kubernetes/` directory, you see only one file, such as `odo-service-hippo.yaml`:

```terminal
$ ls kubernetes
```

Next, use the `--inlined` flag to create a link:

```terminal
$ odo link PostgresCluster/hippo --inlined
```

```terminal title="Example output"
 ✓  Successfully created link between component "backend" and service "PostgresCluster/hippo"

To apply the link, please use `odo push`
```

You need to run `odo push` for the link to get created on the cluster, like the procedure that omits the `--inlined` flag. `odo` stores the configuration in `devfile.yaml`. In this file, you can see an entry like the following:

```yaml
 kubernetes:
    inlined: |
      apiVersion: binding.operators.coreos.com/v1alpha1
      kind: ServiceBinding
      metadata:
        creationTimestamp: null
        name: backend-postgrescluster-hippo
      spec:
        application:
          group: apps
          name: backend-app
          resource: deployments
          version: v1
        bindAsFiles: false
        detectBindingResources: true
        services:
        - group: postgres-operator.crunchydata.com
          id: hippo
          kind: PostgresCluster
          name: hippo
          version: v1beta1
      status:
        secret: ""
  name: backend-postgrescluster-hippo
```

Now if you were to run `odo unlink PostgresCluster/hippo`, `odo` would first remove the link information from the `devfile.yaml`, and then a subsequent `odo push` would delete the link from the cluster.

### Custom bindings {id="_custom_bindings"}

`odo link` accepts the flag `--map` which can inject custom binding information into the component. Such binding information will be fetched from the manifest of the resource that you are linking to your component. For example, in the context of the backend component and PostgreSQL service, you can inject information from the PostgreSQL service’s manifest `postgrescluster.yaml` file into the backend component.

If the name of your `PostgresCluster` service is `hippo` (or the output of `odo service list`, if your PostgresCluster service is named differently), when you want to inject the value of `postgresVersion` from that YAML definition into your backend component, run the command:

```terminal
$ odo link PostgresCluster/hippo --map pgVersion='{{ .hippo.spec.postgresVersion }}'
```

Note that, if the name of your Postgres service is different from `hippo`, you will have to specify that in the above command in the place of `.hippo` in the value for `pgVersion`.

After a link operation, run `odo push` as usual. Upon successful completion of the push operation, you can run the following command from your backend component directory, to validate if the custom mapping got injected properly:

```terminal
$ odo exec -- env | grep pgVersion
```

```terminal title="Example output"
pgVersion=13
```

Since you might want to inject more than just one piece of custom binding information, `odo link` accepts multiple key-value pairs of mappings. The only constraint is that these should be specified as `--map <key>=<value>`. For example, if you want to also inject PostgreSQL image information along with the version, you could run:

```terminal
$ odo link PostgresCluster/hippo --map pgVersion='{{ .hippo.spec.postgresVersion }}' --map pgImage='{{ .hippo.spec.image }}'
```

and then run `odo push`. To validate if both the mappings got injected correctly, run the following command:

```terminal
$ odo exec -- env | grep -e "pgVersion\|pgImage"
```

```terminal title="Example output"
pgVersion=13
pgImage=registry.developers.crunchydata.com/crunchydata/crunchy-postgres-ha:centos8-13.4-0
```

#### To inline or not? {id="_to_inline_or_not"}

You can accept the default behavior where `odo link` generate a manifests file for the link under `kubernetes/` directory. Alternatively, you can use the `--inlined` flag if you prefer to store everything in a single `devfile.yaml` file.

## Binding as files {id="_binding_as_files"}

Another helpful flag that `odo link` provides is `--bind-as-files`. When this flag is passed, the binding information is not injected into the component’s Pod as environment variables but is mounted as a filesystem.

Ensure that there are no existing links between the backend component and the PostgreSQL service. You could do this by running `odo describe` in the backend component’s directory and check if you see output similar to the following:

```terminal
Linked Services:
 · PostgresCluster/hippo
```

Unlink the service from the component using:

```terminal
$ odo unlink PostgresCluster/hippo
```

```terminal
$ odo push
```

## --bind-as-files examples {id="_--bind-as-files_examples"}

### Using the default odo link {id="_using_the_default_odo_link"}

By default, `odo` creates the manifest file under the `kubernetes/` directory, for storing the link information. Link the backend component and PostgreSQL service using:

```terminal
$ odo link PostgresCluster/hippo --bind-as-files
```

```terminal
$ odo push
```

```terminal title="Example odo describe output"
$ odo describe
```

```terminal title="Example output"
Component Name: backend
Type: spring
Environment Variables:
 · PROJECTS_ROOT=/projects
 · PROJECT_SOURCE=/projects
 · DEBUG_PORT=5858
 · SERVICE_BINDING_ROOT=/bindings
 · SERVICE_BINDING_ROOT=/bindings
Storage:
 · m2 of size 3Gi mounted to /home/user/.m2
URLs:
 · http://8080-tcp.192.168.39.112.nip.io exposed via 8080
Linked Services:
 · PostgresCluster/hippo
   Files:
    · /bindings/backend-postgrescluster-hippo/pgbackrest_instance.conf
    · /bindings/backend-postgrescluster-hippo/user
    · /bindings/backend-postgrescluster-hippo/ssh_known_hosts
    · /bindings/backend-postgrescluster-hippo/clusterIP
    · /bindings/backend-postgrescluster-hippo/password
    · /bindings/backend-postgrescluster-hippo/patroni.yaml
    · /bindings/backend-postgrescluster-hippo/pgbouncer-frontend.crt
    · /bindings/backend-postgrescluster-hippo/pgbouncer-host
    · /bindings/backend-postgrescluster-hippo/root.key
    · /bindings/backend-postgrescluster-hippo/pgbouncer-frontend.key
    · /bindings/backend-postgrescluster-hippo/pgbouncer.ini
    · /bindings/backend-postgrescluster-hippo/uri
    · /bindings/backend-postgrescluster-hippo/config-hash
    · /bindings/backend-postgrescluster-hippo/pgbouncer-empty
    · /bindings/backend-postgrescluster-hippo/port
    · /bindings/backend-postgrescluster-hippo/dns.crt
    · /bindings/backend-postgrescluster-hippo/pgbouncer-uri
    · /bindings/backend-postgrescluster-hippo/root.crt
    · /bindings/backend-postgrescluster-hippo/ssh_config
    · /bindings/backend-postgrescluster-hippo/dns.key
    · /bindings/backend-postgrescluster-hippo/host
    · /bindings/backend-postgrescluster-hippo/patroni.crt-combined
    · /bindings/backend-postgrescluster-hippo/pgbouncer-frontend.ca-roots
    · /bindings/backend-postgrescluster-hippo/tls.key
    · /bindings/backend-postgrescluster-hippo/verifier
    · /bindings/backend-postgrescluster-hippo/ca.crt
    · /bindings/backend-postgrescluster-hippo/dbname
    · /bindings/backend-postgrescluster-hippo/patroni.ca-roots
    · /bindings/backend-postgrescluster-hippo/pgbackrest_repo.conf
    · /bindings/backend-postgrescluster-hippo/pgbouncer-port
    · /bindings/backend-postgrescluster-hippo/pgbouncer-verifier
    · /bindings/backend-postgrescluster-hippo/id_ecdsa
    · /bindings/backend-postgrescluster-hippo/id_ecdsa.pub
    · /bindings/backend-postgrescluster-hippo/pgbouncer-password
    · /bindings/backend-postgrescluster-hippo/pgbouncer-users.txt
    · /bindings/backend-postgrescluster-hippo/sshd_config
    · /bindings/backend-postgrescluster-hippo/tls.crt
```

Everything that was an environment variable in the `key=value` format in the earlier `odo describe` output is now mounted as a file. Use the `cat` command to view the contents of some of these files:

```terminal title="Example command"
$ odo exec -- cat /bindings/backend-postgrescluster-hippo/password
```

```terminal title="Example output"
q({JC:jn^mm/Bw}eu+j.GX{k
```

```terminal title="Example command"
$ odo exec -- cat /bindings/backend-postgrescluster-hippo/user
```

```terminal title="Example output"
hippo
```

```terminal title="Example command"
$ odo exec -- cat /bindings/backend-postgrescluster-hippo/clusterIP
```

```terminal title="Example output"
10.101.78.56
```

### Using `--inlined` {id="_using_--inlined"}

The result of using `--bind-as-files` and `--inlined` together is similar to using `odo link --inlined`. The manifest of the link gets stored in the `devfile.yaml`, instead of being stored in a separate file under `kubernetes/` directory. Other than that, the `odo describe` output would be the same as earlier.

### Custom bindings {id="_custom_bindings"}

When you pass custom bindings while linking the backend component with the PostgreSQL service, these custom bindings are injected not as environment variables but are mounted as files. For example:

```terminal
$ odo link PostgresCluster/hippo --map pgVersion='{{ .hippo.spec.postgresVersion }}' --map pgImage='{{ .hippo.spec.image }}' --bind-as-files
```

```terminal
$ odo push
```

These custom bindings get mounted as files instead of being injected as environment variables. To validate that this worked, run the following command. Example output would be `13`.

```terminal title="Example command"
$ odo exec -- cat /bindings/backend-postgrescluster-hippo/pgVersion
```

```terminal title="Example command"
$ odo exec -- cat /bindings/backend-postgrescluster-hippo/pgImage
```

```terminal title="Example output"
registry.developers.crunchydata.com/crunchydata/crunchy-postgres-ha:centos8-13.4-0
```