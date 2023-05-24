export type Country = {
    cca2: string;
    flags: {
        svg: string;
    };
    name: {
        common: string;
    };
}
export type MenuProps = {
    countries: Country[]
}