<h1 align="center">KiCalendar</h1> 
Consiste em uma agenda eletrônica desenvolvida na matéria de Web Back-End com armazenamento e busca de eventos em
um calendário.

## Alunos: 

2576147 - Álefh Trindade Luz De Lima

2576198 - Fábio Massashi Suzuki

2576201 – Gabriel Batistela Da Silva

## 🚀Tecnologias utilizadas:
✔️Front-End:
- ``HTML``
- ``CSS``
- ``JavaScript``

✔️Back-End:
- ``Node.js``
- ``Express.js`` Somente no projeto 2
  
✔️Banco de dados:
- ``MongoDB``

## 📦​Instalação
- ``Pendente``

## 🔗Funcionalidades
- ``Pendente``

## 🏗Estrutura do Projeto
```text
├── README.md
├── app.js
├── categorias.js
├── convidados.js
├── db.js
├── eventos.js
├── logger.js
├── node_modules
    ├── .package-lock.json
    ├── @mongodb-js
    │   └── saslprep
    │   │   ├── LICENSE
    │   │   ├── dist
    │   │       ├── .esm-wrapper.mjs
    │   │       ├── browser.d.ts
    │   │       ├── browser.d.ts.map
    │   │       ├── browser.js
    │   │       ├── browser.js.map
    │   │       ├── code-points-data-browser.d.ts
    │   │       ├── code-points-data-browser.d.ts.map
    │   │       ├── code-points-data-browser.js
    │   │       ├── code-points-data-browser.js.map
    │   │       ├── code-points-data.d.ts
    │   │       ├── code-points-data.d.ts.map
    │   │       ├── code-points-data.js
    │   │       ├── code-points-data.js.map
    │   │       ├── code-points-src.d.ts
    │   │       ├── code-points-src.d.ts.map
    │   │       ├── code-points-src.js
    │   │       ├── code-points-src.js.map
    │   │       ├── generate-code-points.d.ts
    │   │       ├── generate-code-points.d.ts.map
    │   │       ├── generate-code-points.js
    │   │       ├── generate-code-points.js.map
    │   │       ├── index.d.ts
    │   │       ├── index.d.ts.map
    │   │       ├── index.js
    │   │       ├── index.js.map
    │   │       ├── memory-code-points.d.ts
    │   │       ├── memory-code-points.d.ts.map
    │   │       ├── memory-code-points.js
    │   │       ├── memory-code-points.js.map
    │   │       ├── node.d.ts
    │   │       ├── node.d.ts.map
    │   │       ├── node.js
    │   │       ├── node.js.map
    │   │       ├── util.d.ts
    │   │       ├── util.d.ts.map
    │   │       ├── util.js
    │   │       └── util.js.map
    │   │   ├── package.json
    │   │   └── readme.md
    ├── @types
    │   ├── webidl-conversions
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   └── package.json
    │   └── whatwg-url
    │   │   ├── LICENSE
    │   │   ├── README.md
    │   │   ├── index.d.ts
    │   │   ├── lib
    │   │       ├── URL-impl.d.ts
    │   │       ├── URL.d.ts
    │   │       ├── URLSearchParams-impl.d.ts
    │   │       └── URLSearchParams.d.ts
    │   │   ├── package.json
    │   │   └── webidl2js-wrapper.d.ts
    ├── bson
    │   ├── LICENSE.md
    │   ├── README.md
    │   ├── bson.d.ts
    │   ├── etc
    │   │   └── prepare.js
    │   ├── lib
    │   │   ├── bson.bundle.js
    │   │   ├── bson.bundle.js.map
    │   │   ├── bson.cjs
    │   │   ├── bson.cjs.map
    │   │   ├── bson.mjs
    │   │   ├── bson.mjs.map
    │   │   ├── bson.rn.cjs
    │   │   └── bson.rn.cjs.map
    │   ├── package.json
    │   ├── src
    │   │   ├── binary.ts
    │   │   ├── bson.ts
    │   │   ├── bson_value.ts
    │   │   ├── code.ts
    │   │   ├── constants.ts
    │   │   ├── db_ref.ts
    │   │   ├── decimal128.ts
    │   │   ├── double.ts
    │   │   ├── error.ts
    │   │   ├── extended_json.ts
    │   │   ├── index.ts
    │   │   ├── int_32.ts
    │   │   ├── long.ts
    │   │   ├── max_key.ts
    │   │   ├── min_key.ts
    │   │   ├── objectid.ts
    │   │   ├── parse_utf8.ts
    │   │   ├── parser
    │   │   │   ├── calculate_size.ts
    │   │   │   ├── deserializer.ts
    │   │   │   ├── on_demand
    │   │   │   │   ├── index.ts
    │   │   │   │   └── parse_to_elements.ts
    │   │   │   ├── serializer.ts
    │   │   │   └── utils.ts
    │   │   ├── regexp.ts
    │   │   ├── symbol.ts
    │   │   ├── timestamp.ts
    │   │   └── utils
    │   │   │   ├── byte_utils.ts
    │   │   │   ├── latin.ts
    │   │   │   ├── node_byte_utils.ts
    │   │   │   ├── number_utils.ts
    │   │   │   ├── string_utils.ts
    │   │   │   └── web_byte_utils.ts
    │   └── vendor
    │   │   ├── base64
    │   │       ├── LICENSE-MIT.txt
    │   │       ├── README.md
    │   │       ├── base64.js
    │   │       └── package.json
    │   │   └── text-encoding
    │   │       ├── LICENSE.md
    │   │       ├── README.md
    │   │       ├── index.js
    │   │       ├── lib
    │   │           ├── encoding-indexes.js
    │   │           └── encoding.js
    │   │       └── package.json
    ├── memory-pager
    │   ├── .travis.yml
    │   ├── LICENSE
    │   ├── README.md
    │   ├── index.js
    │   ├── package.json
    │   └── test.js
    ├── mongodb-connection-string-url
    │   ├── .esm-wrapper.mjs
    │   ├── LICENSE
    │   ├── README.md
    │   ├── lib
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── index.js.map
    │   │   ├── redact.d.ts
    │   │   ├── redact.js
    │   │   └── redact.js.map
    │   └── package.json
    ├── mongodb
    │   ├── LICENSE.md
    │   ├── README.md
    │   ├── etc
    │   │   └── prepare.js
    │   ├── lib
    │   │   ├── admin.js
    │   │   ├── admin.js.map
    │   │   ├── beta.d.ts
    │   │   ├── beta.js
    │   │   ├── beta.js.map
    │   │   ├── bson.js
    │   │   ├── bson.js.map
    │   │   ├── bulk
    │   │   │   ├── common.js
    │   │   │   ├── common.js.map
    │   │   │   ├── ordered.js
    │   │   │   ├── ordered.js.map
    │   │   │   ├── unordered.js
    │   │   │   └── unordered.js.map
    │   │   ├── change_stream.js
    │   │   ├── change_stream.js.map
    │   │   ├── client-side-encryption
    │   │   │   ├── auto_encrypter.js
    │   │   │   ├── auto_encrypter.js.map
    │   │   │   ├── client_encryption.js
    │   │   │   ├── client_encryption.js.map
    │   │   │   ├── crypto_callbacks.js
    │   │   │   ├── crypto_callbacks.js.map
    │   │   │   ├── errors.js
    │   │   │   ├── errors.js.map
    │   │   │   ├── mongocryptd_manager.js
    │   │   │   ├── mongocryptd_manager.js.map
    │   │   │   ├── providers
    │   │   │   │   ├── aws.js
    │   │   │   │   ├── aws.js.map
    │   │   │   │   ├── azure.js
    │   │   │   │   ├── azure.js.map
    │   │   │   │   ├── gcp.js
    │   │   │   │   ├── gcp.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── state_machine.js
    │   │   │   └── state_machine.js.map
    │   │   ├── cmap
    │   │   │   ├── auth
    │   │   │   │   ├── auth_provider.js
    │   │   │   │   ├── auth_provider.js.map
    │   │   │   │   ├── aws_temporary_credentials.js
    │   │   │   │   ├── aws_temporary_credentials.js.map
    │   │   │   │   ├── gssapi.js
    │   │   │   │   ├── gssapi.js.map
    │   │   │   │   ├── mongo_credentials.js
    │   │   │   │   ├── mongo_credentials.js.map
    │   │   │   │   ├── mongodb_aws.js
    │   │   │   │   ├── mongodb_aws.js.map
    │   │   │   │   ├── mongodb_oidc.js
    │   │   │   │   ├── mongodb_oidc.js.map
    │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   ├── automated_callback_workflow.js
    │   │   │   │   │   ├── automated_callback_workflow.js.map
    │   │   │   │   │   ├── azure_machine_workflow.js
    │   │   │   │   │   ├── azure_machine_workflow.js.map
    │   │   │   │   │   ├── callback_workflow.js
    │   │   │   │   │   ├── callback_workflow.js.map
    │   │   │   │   │   ├── command_builders.js
    │   │   │   │   │   ├── command_builders.js.map
    │   │   │   │   │   ├── gcp_machine_workflow.js
    │   │   │   │   │   ├── gcp_machine_workflow.js.map
    │   │   │   │   │   ├── human_callback_workflow.js
    │   │   │   │   │   ├── human_callback_workflow.js.map
    │   │   │   │   │   ├── k8s_machine_workflow.js
    │   │   │   │   │   ├── k8s_machine_workflow.js.map
    │   │   │   │   │   ├── machine_workflow.js
    │   │   │   │   │   ├── machine_workflow.js.map
    │   │   │   │   │   ├── token_cache.js
    │   │   │   │   │   ├── token_cache.js.map
    │   │   │   │   │   ├── token_machine_workflow.js
    │   │   │   │   │   └── token_machine_workflow.js.map
    │   │   │   │   ├── plain.js
    │   │   │   │   ├── plain.js.map
    │   │   │   │   ├── providers.js
    │   │   │   │   ├── providers.js.map
    │   │   │   │   ├── scram.js
    │   │   │   │   ├── scram.js.map
    │   │   │   │   ├── x509.js
    │   │   │   │   └── x509.js.map
    │   │   │   ├── command_monitoring_events.js
    │   │   │   ├── command_monitoring_events.js.map
    │   │   │   ├── commands.js
    │   │   │   ├── commands.js.map
    │   │   │   ├── connect.js
    │   │   │   ├── connect.js.map
    │   │   │   ├── connection.js
    │   │   │   ├── connection.js.map
    │   │   │   ├── connection_pool.js
    │   │   │   ├── connection_pool.js.map
    │   │   │   ├── connection_pool_events.js
    │   │   │   ├── connection_pool_events.js.map
    │   │   │   ├── errors.js
    │   │   │   ├── errors.js.map
    │   │   │   ├── handshake
    │   │   │   │   ├── client_metadata.js
    │   │   │   │   └── client_metadata.js.map
    │   │   │   ├── metrics.js
    │   │   │   ├── metrics.js.map
    │   │   │   ├── stream_description.js
    │   │   │   ├── stream_description.js.map
    │   │   │   └── wire_protocol
    │   │   │   │   ├── compression.js
    │   │   │   │   ├── compression.js.map
    │   │   │   │   ├── constants.js
    │   │   │   │   ├── constants.js.map
    │   │   │   │   ├── on_data.js
    │   │   │   │   ├── on_data.js.map
    │   │   │   │   ├── on_demand
    │   │   │   │       ├── document.js
    │   │   │   │       └── document.js.map
    │   │   │   │   ├── responses.js
    │   │   │   │   ├── responses.js.map
    │   │   │   │   ├── shared.js
    │   │   │   │   └── shared.js.map
    │   │   ├── collection.js
    │   │   ├── collection.js.map
    │   │   ├── connection_string.js
    │   │   ├── connection_string.js.map
    │   │   ├── constants.js
    │   │   ├── constants.js.map
    │   │   ├── cursor
    │   │   │   ├── abstract_cursor.js
    │   │   │   ├── abstract_cursor.js.map
    │   │   │   ├── aggregation_cursor.js
    │   │   │   ├── aggregation_cursor.js.map
    │   │   │   ├── change_stream_cursor.js
    │   │   │   ├── change_stream_cursor.js.map
    │   │   │   ├── client_bulk_write_cursor.js
    │   │   │   ├── client_bulk_write_cursor.js.map
    │   │   │   ├── find_cursor.js
    │   │   │   ├── find_cursor.js.map
    │   │   │   ├── list_collections_cursor.js
    │   │   │   ├── list_collections_cursor.js.map
    │   │   │   ├── list_indexes_cursor.js
    │   │   │   ├── list_indexes_cursor.js.map
    │   │   │   ├── list_search_indexes_cursor.js
    │   │   │   ├── list_search_indexes_cursor.js.map
    │   │   │   ├── run_command_cursor.js
    │   │   │   └── run_command_cursor.js.map
    │   │   ├── db.js
    │   │   ├── db.js.map
    │   │   ├── deps.js
    │   │   ├── deps.js.map
    │   │   ├── encrypter.js
    │   │   ├── encrypter.js.map
    │   │   ├── error.js
    │   │   ├── error.js.map
    │   │   ├── explain.js
    │   │   ├── explain.js.map
    │   │   ├── gridfs
    │   │   │   ├── download.js
    │   │   │   ├── download.js.map
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── upload.js
    │   │   │   └── upload.js.map
    │   │   ├── index.js
    │   │   ├── index.js.map
    │   │   ├── mongo_client.js
    │   │   ├── mongo_client.js.map
    │   │   ├── mongo_client_auth_providers.js
    │   │   ├── mongo_client_auth_providers.js.map
    │   │   ├── mongo_logger.js
    │   │   ├── mongo_logger.js.map
    │   │   ├── mongo_types.js
    │   │   ├── mongo_types.js.map
    │   │   ├── operations
    │   │   │   ├── aggregate.js
    │   │   │   ├── aggregate.js.map
    │   │   │   ├── bulk_write.js
    │   │   │   ├── bulk_write.js.map
    │   │   │   ├── client_bulk_write
    │   │   │   │   ├── client_bulk_write.js
    │   │   │   │   ├── client_bulk_write.js.map
    │   │   │   │   ├── command_builder.js
    │   │   │   │   ├── command_builder.js.map
    │   │   │   │   ├── common.js
    │   │   │   │   ├── common.js.map
    │   │   │   │   ├── executor.js
    │   │   │   │   ├── executor.js.map
    │   │   │   │   ├── results_merger.js
    │   │   │   │   └── results_merger.js.map
    │   │   │   ├── collections.js
    │   │   │   ├── collections.js.map
    │   │   │   ├── command.js
    │   │   │   ├── command.js.map
    │   │   │   ├── count.js
    │   │   │   ├── count.js.map
    │   │   │   ├── create_collection.js
    │   │   │   ├── create_collection.js.map
    │   │   │   ├── delete.js
    │   │   │   ├── delete.js.map
    │   │   │   ├── distinct.js
    │   │   │   ├── distinct.js.map
    │   │   │   ├── drop.js
    │   │   │   ├── drop.js.map
    │   │   │   ├── estimated_document_count.js
    │   │   │   ├── estimated_document_count.js.map
    │   │   │   ├── execute_operation.js
    │   │   │   ├── execute_operation.js.map
    │   │   │   ├── find.js
    │   │   │   ├── find.js.map
    │   │   │   ├── find_and_modify.js
    │   │   │   ├── find_and_modify.js.map
    │   │   │   ├── get_more.js
    │   │   │   ├── get_more.js.map
    │   │   │   ├── indexes.js
    │   │   │   ├── indexes.js.map
    │   │   │   ├── insert.js
    │   │   │   ├── insert.js.map
    │   │   │   ├── is_capped.js
    │   │   │   ├── is_capped.js.map
    │   │   │   ├── kill_cursors.js
    │   │   │   ├── kill_cursors.js.map
    │   │   │   ├── list_collections.js
    │   │   │   ├── list_collections.js.map
    │   │   │   ├── list_databases.js
    │   │   │   ├── list_databases.js.map
    │   │   │   ├── operation.js
    │   │   │   ├── operation.js.map
    │   │   │   ├── options_operation.js
    │   │   │   ├── options_operation.js.map
    │   │   │   ├── profiling_level.js
    │   │   │   ├── profiling_level.js.map
    │   │   │   ├── remove_user.js
    │   │   │   ├── remove_user.js.map
    │   │   │   ├── rename.js
    │   │   │   ├── rename.js.map
    │   │   │   ├── run_command.js
    │   │   │   ├── run_command.js.map
    │   │   │   ├── search_indexes
    │   │   │   │   ├── create.js
    │   │   │   │   ├── create.js.map
    │   │   │   │   ├── drop.js
    │   │   │   │   ├── drop.js.map
    │   │   │   │   ├── update.js
    │   │   │   │   └── update.js.map
    │   │   │   ├── set_profiling_level.js
    │   │   │   ├── set_profiling_level.js.map
    │   │   │   ├── stats.js
    │   │   │   ├── stats.js.map
    │   │   │   ├── update.js
    │   │   │   ├── update.js.map
    │   │   │   ├── validate_collection.js
    │   │   │   └── validate_collection.js.map
    │   │   ├── read_concern.js
    │   │   ├── read_concern.js.map
    │   │   ├── read_preference.js
    │   │   ├── read_preference.js.map
    │   │   ├── resource_management.js
    │   │   ├── resource_management.js.map
    │   │   ├── sdam
    │   │   │   ├── common.js
    │   │   │   ├── common.js.map
    │   │   │   ├── events.js
    │   │   │   ├── events.js.map
    │   │   │   ├── monitor.js
    │   │   │   ├── monitor.js.map
    │   │   │   ├── server.js
    │   │   │   ├── server.js.map
    │   │   │   ├── server_description.js
    │   │   │   ├── server_description.js.map
    │   │   │   ├── server_selection.js
    │   │   │   ├── server_selection.js.map
    │   │   │   ├── server_selection_events.js
    │   │   │   ├── server_selection_events.js.map
    │   │   │   ├── srv_polling.js
    │   │   │   ├── srv_polling.js.map
    │   │   │   ├── topology.js
    │   │   │   ├── topology.js.map
    │   │   │   ├── topology_description.js
    │   │   │   └── topology_description.js.map
    │   │   ├── sessions.js
    │   │   ├── sessions.js.map
    │   │   ├── sort.js
    │   │   ├── sort.js.map
    │   │   ├── timeout.js
    │   │   ├── timeout.js.map
    │   │   ├── transactions.js
    │   │   ├── transactions.js.map
    │   │   ├── utils.js
    │   │   ├── utils.js.map
    │   │   ├── write_concern.js
    │   │   └── write_concern.js.map
    │   ├── mongodb.d.ts
    │   ├── package.json
    │   ├── src
    │   │   ├── admin.ts
    │   │   ├── beta.ts
    │   │   ├── bson.ts
    │   │   ├── bulk
    │   │   │   ├── common.ts
    │   │   │   ├── ordered.ts
    │   │   │   └── unordered.ts
    │   │   ├── change_stream.ts
    │   │   ├── client-side-encryption
    │   │   │   ├── auto_encrypter.ts
    │   │   │   ├── client_encryption.ts
    │   │   │   ├── crypto_callbacks.ts
    │   │   │   ├── errors.ts
    │   │   │   ├── mongocryptd_manager.ts
    │   │   │   ├── providers
    │   │   │   │   ├── aws.ts
    │   │   │   │   ├── azure.ts
    │   │   │   │   ├── gcp.ts
    │   │   │   │   └── index.ts
    │   │   │   └── state_machine.ts
    │   │   ├── cmap
    │   │   │   ├── auth
    │   │   │   │   ├── auth_provider.ts
    │   │   │   │   ├── aws_temporary_credentials.ts
    │   │   │   │   ├── gssapi.ts
    │   │   │   │   ├── mongo_credentials.ts
    │   │   │   │   ├── mongodb_aws.ts
    │   │   │   │   ├── mongodb_oidc.ts
    │   │   │   │   ├── mongodb_oidc
    │   │   │   │   │   ├── automated_callback_workflow.ts
    │   │   │   │   │   ├── azure_machine_workflow.ts
    │   │   │   │   │   ├── callback_workflow.ts
    │   │   │   │   │   ├── command_builders.ts
    │   │   │   │   │   ├── gcp_machine_workflow.ts
    │   │   │   │   │   ├── human_callback_workflow.ts
    │   │   │   │   │   ├── k8s_machine_workflow.ts
    │   │   │   │   │   ├── machine_workflow.ts
    │   │   │   │   │   ├── token_cache.ts
    │   │   │   │   │   └── token_machine_workflow.ts
    │   │   │   │   ├── plain.ts
    │   │   │   │   ├── providers.ts
    │   │   │   │   ├── scram.ts
    │   │   │   │   └── x509.ts
    │   │   │   ├── command_monitoring_events.ts
    │   │   │   ├── commands.ts
    │   │   │   ├── connect.ts
    │   │   │   ├── connection.ts
    │   │   │   ├── connection_pool.ts
    │   │   │   ├── connection_pool_events.ts
    │   │   │   ├── errors.ts
    │   │   │   ├── handshake
    │   │   │   │   └── client_metadata.ts
    │   │   │   ├── metrics.ts
    │   │   │   ├── stream_description.ts
    │   │   │   └── wire_protocol
    │   │   │   │   ├── compression.ts
    │   │   │   │   ├── constants.ts
    │   │   │   │   ├── on_data.ts
    │   │   │   │   ├── on_demand
    │   │   │   │       └── document.ts
    │   │   │   │   ├── responses.ts
    │   │   │   │   └── shared.ts
    │   │   ├── collection.ts
    │   │   ├── connection_string.ts
    │   │   ├── constants.ts
    │   │   ├── cursor
    │   │   │   ├── abstract_cursor.ts
    │   │   │   ├── aggregation_cursor.ts
    │   │   │   ├── change_stream_cursor.ts
    │   │   │   ├── client_bulk_write_cursor.ts
    │   │   │   ├── find_cursor.ts
    │   │   │   ├── list_collections_cursor.ts
    │   │   │   ├── list_indexes_cursor.ts
    │   │   │   ├── list_search_indexes_cursor.ts
    │   │   │   └── run_command_cursor.ts
    │   │   ├── db.ts
    │   │   ├── deps.ts
    │   │   ├── encrypter.ts
    │   │   ├── error.ts
    │   │   ├── explain.ts
    │   │   ├── gridfs
    │   │   │   ├── download.ts
    │   │   │   ├── index.ts
    │   │   │   └── upload.ts
    │   │   ├── index.ts
    │   │   ├── mongo_client.ts
    │   │   ├── mongo_client_auth_providers.ts
    │   │   ├── mongo_logger.ts
    │   │   ├── mongo_types.ts
    │   │   ├── operations
    │   │   │   ├── aggregate.ts
    │   │   │   ├── bulk_write.ts
    │   │   │   ├── client_bulk_write
    │   │   │   │   ├── client_bulk_write.ts
    │   │   │   │   ├── command_builder.ts
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── executor.ts
    │   │   │   │   └── results_merger.ts
    │   │   │   ├── collections.ts
    │   │   │   ├── command.ts
    │   │   │   ├── count.ts
    │   │   │   ├── create_collection.ts
    │   │   │   ├── delete.ts
    │   │   │   ├── distinct.ts
    │   │   │   ├── drop.ts
    │   │   │   ├── estimated_document_count.ts
    │   │   │   ├── execute_operation.ts
    │   │   │   ├── find.ts
    │   │   │   ├── find_and_modify.ts
    │   │   │   ├── get_more.ts
    │   │   │   ├── indexes.ts
    │   │   │   ├── insert.ts
    │   │   │   ├── is_capped.ts
    │   │   │   ├── kill_cursors.ts
    │   │   │   ├── list_collections.ts
    │   │   │   ├── list_databases.ts
    │   │   │   ├── operation.ts
    │   │   │   ├── options_operation.ts
    │   │   │   ├── profiling_level.ts
    │   │   │   ├── remove_user.ts
    │   │   │   ├── rename.ts
    │   │   │   ├── run_command.ts
    │   │   │   ├── search_indexes
    │   │   │   │   ├── create.ts
    │   │   │   │   ├── drop.ts
    │   │   │   │   └── update.ts
    │   │   │   ├── set_profiling_level.ts
    │   │   │   ├── stats.ts
    │   │   │   ├── update.ts
    │   │   │   └── validate_collection.ts
    │   │   ├── read_concern.ts
    │   │   ├── read_preference.ts
    │   │   ├── resource_management.ts
    │   │   ├── sdam
    │   │   │   ├── common.ts
    │   │   │   ├── events.ts
    │   │   │   ├── monitor.ts
    │   │   │   ├── server.ts
    │   │   │   ├── server_description.ts
    │   │   │   ├── server_selection.ts
    │   │   │   ├── server_selection_events.ts
    │   │   │   ├── srv_polling.ts
    │   │   │   ├── topology.ts
    │   │   │   └── topology_description.ts
    │   │   ├── sessions.ts
    │   │   ├── sort.ts
    │   │   ├── timeout.ts
    │   │   ├── transactions.ts
    │   │   ├── utils.ts
    │   │   └── write_concern.ts
    │   └── tsconfig.json
    ├── punycode
    │   ├── LICENSE-MIT.txt
    │   ├── README.md
    │   ├── package.json
    │   ├── punycode.es6.js
    │   └── punycode.js
    ├── sparse-bitfield
    │   ├── .npmignore
    │   ├── .travis.yml
    │   ├── LICENSE
    │   ├── README.md
    │   ├── index.js
    │   ├── package.json
    │   └── test.js
    ├── tr46
    │   ├── LICENSE.md
    │   ├── README.md
    │   ├── index.js
    │   ├── lib
    │   │   ├── mappingTable.json
    │   │   ├── regexes.js
    │   │   └── statusMapping.js
    │   └── package.json
    ├── webidl-conversions
    │   ├── LICENSE.md
    │   ├── README.md
    │   ├── lib
    │   │   └── index.js
    │   └── package.json
    └── whatwg-url
    │   ├── LICENSE.txt
    │   ├── README.md
    │   ├── index.js
    │   ├── lib
    │       ├── Function.js
    │       ├── URL-impl.js
    │       ├── URL.js
    │       ├── URLSearchParams-impl.js
    │       ├── URLSearchParams.js
    │       ├── VoidFunction.js
    │       ├── encoding.js
    │       ├── infra.js
    │       ├── percent-encoding.js
    │       ├── url-state-machine.js
    │       ├── urlencoded.js
    │       └── utils.js
    │   ├── package.json
    │   └── webidl2js-wrapper.js
├── package-lock.json
├── package.json
└── usuarios.js


```
