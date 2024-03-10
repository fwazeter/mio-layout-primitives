export default {
presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
                modules: false // tells babel to preserve ES modules.
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ]
}